"use client";

import React, { useRef, useState } from "react";

import { tireData, DEFAULT_TIRE_WIDTHS } from "@/data/TireData";

import { Search, X } from "lucide-react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

const TIRE_DIAMETER = 14;
const INITIAL_SUGGESTIONS = tireData[TIRE_DIAMETER].widths;

const TireSelectionInput: React.FC = () => {
  // Create a reference to the input element
  const inputRef = useRef<HTMLInputElement>(null);
  const [inputValue, setInputValue] = useState<string>("");
  const [inputFocused, setInputFocused] = useState(false);
  const [suggestions, setSuggestions] = useState<number[]>(DEFAULT_TIRE_WIDTHS);
  // Add a new state variable for the selected suggestion
  const [selectedSuggestion, setSelectedSuggestion] = useState(0);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const input = event.target.value;
    setInputValue(input);

    // Filter available widths based on user input
    const matchingWidths = tireData[TIRE_DIAMETER].widths.filter((width) =>
      width.toString().startsWith(input),
    );

    setSuggestions(matchingWidths);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    // Check if the down arrow key was pressed
    if (event.key === "ArrowDown") {
      // Move to the next suggestion, or loop back to the start if we're at the end
      setSelectedSuggestion((prevSelectedSuggestion) => {
        return (prevSelectedSuggestion + 1) % suggestions.length;
      });

      setInputValue(suggestions[selectedSuggestion].toString());
      event.preventDefault();
    }
    // Check if the up arrow key was pressed
    if (event.key === "ArrowUp") {
      // Move to the previous suggestion, or loop back to the end if we're at the start
      setSelectedSuggestion(
        (prevSelectedSuggestion) =>
          (prevSelectedSuggestion - 1 + suggestions.length) %
          suggestions.length,
      );

      setInputValue(suggestions[selectedSuggestion].toString());
      event.preventDefault();
    }

    // Check if the enter key was pressed
    if (event.key === "Enter" && suggestions.length > 0) {
      // Select the current suggestion
      setInputValue(suggestions[selectedSuggestion].toString());
      setSuggestions([]);
      event.preventDefault();
    }

    // Check if the escape key was pressed
    if (event.key === "Escape") {
      // Clear the suggestions
      setSuggestions([]);
      event.preventDefault();
    }

    // Check if the tab key was pressed
    if (event.key === "Tab") {
      // Select the current suggestion
      setInputValue(suggestions[selectedSuggestion].toString());
      setSuggestions([]);
    }
 
  };

  const handleSearch = (event: React.FormEvent<HTMLFormElement>) => {
    console.log("handleSearch called");
    event.preventDefault();
    console.log(`Searching for width: ${inputValue}`);
  };

  const handleSuggestionClick = (width: number) => {
    // Set the selected width from suggestions
    setInputValue(width.toString());
    setSuggestions([]);

    // Focus on input
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  const handleClearInput = () => {
    setInputValue("");
    setSuggestions([]);
  };

  // function that checks if the nuer input is valid after losing focus
  // const handleBlur = () => {



  return (
    <form onSubmit={handleSearch} className="relative flex w-full items-end">
      <div className="grid max-w-sm items-center gap-1.5">
        <Label htmlFor="width" className="translate-x-[4px]">Width</Label>
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
            onFocus={() => setInputFocused(true)}
            onBlur={() => setInputFocused(false)}
            placeholder="eg: 195"
            className="border-[2px] border-grayBorder bg-transparent text-white"
          />
          {/* Clear Input */}
          {inputValue.length > 0 && (
            <Button
              type="button"
              onClick={handleClearInput}
              size={"icon"}
              variant={"ghost"}
              className="absolute right-1 top-1/2 h-max w-max -translate-y-1/2 p-1.5 hover:bg-white/10 hover:text-white"
            >
              <X className="h-4 w-4 text-white" />
            </Button>
          )}

          {/* Suggestions */}
          {inputFocused && suggestions.length > 0 && (
            <ul
              className="absolute left-0 right-0 top-full z-20 mt-4 flex h-max max-h-52 max-w-sm flex-col rounded-md border border-grayBorder text-white"
              style={{
                backgroundImage:
                  "radial-gradient(circle at 50% 100%, #323236, #252529)",
              }}
            >
              {suggestions.map((width, index) => (
                <li
                  key={index}
                  className={`cursor-pointer p-2 hover:bg-[#323236] hover:text-white ${
                    index === selectedSuggestion
                      ? "bg-[#323236] text-white"
                      : ""
                  }`}
                  onClick={() => handleSuggestionClick(width)}
                >
                  {width}
                </li>
              ))}
            </ul>
          )}
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
