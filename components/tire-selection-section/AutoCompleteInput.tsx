// AutoCompleteInput.tsx
import React, { useRef, useState } from "react";

import { useOnClickOutside } from "@/hooks/use-on-click-outiside";

import { Input } from "../ui/input";
import ClearInputButton from "./ClearInputButton";
import Suggestions from "./Suggestions";
import ErrorMessage from "./ErrorMessage";

interface AutoCompleteInputProps {
  data: number[];
  placeholder: string;
  id: string;
}

const AutoCompleteInput: React.FC<AutoCompleteInputProps> = ({
  data,
  placeholder,
  id,
}) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const suggestionsRef = useRef<HTMLUListElement>(null);

  const [inputValue, setInputValue] = useState<string>("");
  const [inputFocused, setInputFocused] = useState(false);
  const [suggestions, setSuggestions] = useState<number[]>(data);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [selectedSuggestion, setSelectedSuggestion] = useState(-1);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const input = event.target.value;

    // if empty, set suggestions to default
    if (input.length === 0) {
      setSuggestions(data);
    }

    setInputValue(input);

    // Filter available widths based on user input
    const matchingWidths = data.filter((width) =>
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

    // Close the suggestions
    setShowSuggestions(false);

    event.preventDefault();
  };

  const handleEscape = (event: React.KeyboardEvent<HTMLInputElement>) => {
    // Close suggestions
    setShowSuggestions(false);
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

  const handleSuggestionClick = (event: React.MouseEvent, width: number) => {
    // Set the selected width from suggestions
    setInputValue((prev) => {
      // close suggestions
      setShowSuggestions(false);
      return width.toString();
    });

    // Focus on input
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  const handleClearInput = () => {
    setInputValue("");
    // set suggestiond to default
    setSuggestions(data);
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
    <div className="relative">
      <Input
        ref={inputRef}
        autoComplete="off"
        type="number"
        id={id}
        min="0"
        value={inputValue}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
        onFocus={handleFocus}
        onBlur={handleBlur}
        placeholder={placeholder}
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
  );
};

export default AutoCompleteInput;
