"use client";

import React, { useRef, useState } from "react";

import { tireData, DEFAULT_TIRE_WIDTHS } from "@/data/TireData";
import { useOnClickOutside } from "@/hooks/use-on-click-outiside";

import { Search } from "lucide-react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import Suggestions from "./Suggestions";
import ClearInputButton from "./ClearInputButton";
import ErrorMessage from "./ErrorMessage";

const TIRE_DIAMETER = 14;
const INITIAL_SUGGESTIONS = tireData[TIRE_DIAMETER].widths;

const TireSelectionInput: React.FC = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const suggestionsRef = useRef<HTMLUListElement>(null);

  const [inputValue, setInputValue] = useState<string>("");
  const [inputFocused, setInputFocused] = useState(false);
  const [suggestions, setSuggestions] = useState<number[]>(DEFAULT_TIRE_WIDTHS);
  const [showSuggestions, setShowSuggestions] = useState(false);
  // Add a new state variable for the selected suggestion
  const [selectedSuggestion, setSelectedSuggestion] = useState(-1);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const input = event.target.value;
    setInputValue(input);

    // Filter available widths based on user input
    const matchingWidths = tireData[TIRE_DIAMETER].widths.filter((width) =>
      width.toString().startsWith(input),
    );

    setSuggestions(matchingWidths);

    // Highlight the first suggestion
    if (matchingWidths.length > 0) {
      setSelectedSuggestion(0);
    } else {
      setSelectedSuggestion(-1);
    }
  };

  const handleArrowDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    // Move to the next suggestion, or loop back to the start if we're at the end
    setSelectedSuggestion((prevSelectedSuggestion) => {
      const newIndex = (prevSelectedSuggestion + 1) % suggestions.length;
      setInputValue(suggestions[newIndex].toString());
      return newIndex;
    });

    event.preventDefault();
  };

  const handleArrowUp = (event: React.KeyboardEvent<HTMLInputElement>) => {
    // Move to the previous suggestion, or loop back to the end if we're at the start
    setSelectedSuggestion((prevSelectedSuggestion) => {
      const newIndex =
        (prevSelectedSuggestion - 1 + suggestions.length) % suggestions.length;
      setInputValue(suggestions[newIndex].toString());
      return newIndex;
    });
    event.preventDefault();
  };

  const handleEnter = (event: React.KeyboardEvent<HTMLInputElement>) => {
    // Select the current suggestion
    setInputValue(suggestions[selectedSuggestion].toString());
    setSuggestions([]);
    event.preventDefault();
  };

  const handleEscape = (event: React.KeyboardEvent<HTMLInputElement>) => {
    // Clear the suggestions
    setSuggestions([]);
    event.preventDefault();

    // Return focus to the input field
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "ArrowDown" && showSuggestions) handleArrowDown(event);
    if (event.key === "ArrowUp" && showSuggestions) handleArrowUp(event);
    if (event.key === "Enter" && showSuggestions) handleEnter(event);
    if (event.key === "Escape") handleEscape(event);
  };

  const handleSearch = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(`Searching for width: ${inputValue}`);
  };

  const handleSuggestionClick = (event: React.MouseEvent, width: number) => {
    // Set the selected width from suggestions
    setInputValue(width.toString());

    // close suggestions
    setShowSuggestions(false);

    // Focus on input
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  const handleClearInput = () => {
    setInputValue("");
    // set suggestiond to default
    setSuggestions(INITIAL_SUGGESTIONS);
    // Focus on input
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  const handleFocus = () => {
    setInputFocused(true);
    setShowSuggestions(true);
  };

  // if the user inputs a number that is not in the list of suggestions after leaving focus, show an error message
  const handleBlur = () => {
    if (!suggestions.includes(Number(inputValue)) && inputValue.length > 0) {
      setErrorMessage("Size not available.");
      console.log(suggestions);
    } else {
      setErrorMessage(null);
    }
  };

  // Close suggestions when clicking outside
  useOnClickOutside(suggestionsRef, () => setShowSuggestions(false));

  return (
    <form onSubmit={handleSearch} className="relative flex w-full items-end">
      <div className="grid max-w-sm items-center gap-1.5">
        <Label htmlFor="width" className="translate-x-[4px]">
          Width
        </Label>
        <div className="relative">
          <Input
            ref={inputRef}
            autoComplete="off"
            type="number"
            name="width"
            id="width"
            min="0"
            value={inputValue}
            onChange={handleInputChange}
            onKeyDown={handleKeyDown}
            onFocus={handleFocus}
            onBlur={handleBlur}
            placeholder="eg: 195"
            className="border-[2px] border-grayBorder bg-transparent text-white"
            role="combobox"
            aria-expanded={inputFocused && showSuggestions}
            aria-activedescendant={
              selectedSuggestion >= 0
                ? `suggestion-${selectedSuggestion}`
                : undefined
            }
          />
          {/* Clear Input */}
          {inputValue.length > 0 && (
            <ClearInputButton handleClearInput={handleClearInput} />
          )}

          {/* Suggestions */}
          {showSuggestions && suggestions.length > 0 && (
            <Suggestions
              ref={suggestionsRef}
              suggestions={suggestions}
              selectedSuggestion={selectedSuggestion}
              handleSuggestionClick={handleSuggestionClick}
            />
          )}

          {/* Error Message */}
          {errorMessage && <ErrorMessage message={errorMessage} />}
        </div>
      </div>

      {/* Search Button */}
      <Button
        type="submit"
        variant={"outline"}
        className="ml-12 h-10 rounded-md border-[2px] hover:bg-white/10 hover:text-white"
      >
        Search <Search className="ml-2 h-4 w-4 text-brand" />
      </Button>
    </form>
  );
};

export default TireSelectionInput;
