// AutoCompleteInput.tsx
import React, { useRef, useState, useEffect } from "react";

import { useOnClickOutside } from "@/hooks/use-on-click-outiside";

import { Input } from "../ui/input";
import { Label } from "../ui/label";
import ClearInputButton from "./ClearInputButton";
import Suggestions from "./Suggestions";
import ErrorMessage from "./ErrorMessage";

interface AutoCompleteInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  inputValue: string;
  setInputValue: React.Dispatch<React.SetStateAction<string>>;
  setDisableSearch: React.Dispatch<React.SetStateAction<boolean>>;
  suggestionData: number[];
  label: string;
  placeholder: string;
}

const AutoCompleteInput: React.FC<AutoCompleteInputProps> = ({
  inputValue,
  setInputValue,
  setDisableSearch,
  suggestionData,
  label,
  placeholder,
  ...props
}) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const suggestionsRef = useRef<HTMLUListElement>(null);
  const inputContainer = useRef<HTMLDivElement>(null);

  const [suggestions, setSuggestions] = useState<number[]>(suggestionData);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [selectedSuggestion, setSelectedSuggestion] = useState(-1);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  /* 
  This way, the `AutoCompleteInput` component will correctly update its state
  and re-render when the `suggestionData` prop changes, without needing to 
  create a new component on every render.
  */
  useEffect(() => {
    setSuggestions(suggestionData);
  }, [suggestionData]);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const input = event.target.value;
    setInputValue(input);

    // Show suggestions if there is no input
    if (input.length === 0) setShowSuggestions(true);

    // Filter available widths based on user input
    const matchingWidths = suggestionData.filter((number) =>
      number.toString().includes(input),
    );

    setSuggestions((prevSuggestions) => matchingWidths);

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
    setInputValue(width.toString());

    // Close suggestions
    setShowSuggestions(false);
  };

  const handleClearInput = () => {
    setInputValue("");
    // Focus on input
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  const handleFocus = () => {
    setShowSuggestions(true);
  };

  // if the user inputs a number that is not in the list of suggestions after leaving focus, show an error message
  const handleBlur = () => {
    if (!suggestions.includes(Number(inputValue)) && inputValue.length > 0) {
      setErrorMessage("Size is not available.");
      setDisableSearch(true);
    } else {
      setErrorMessage(null);
      setDisableSearch(false);
    }
  };

  // Close suggestions when clicking outside of the input or suggestions
  useOnClickOutside([inputContainer], () => setShowSuggestions(false));

  return (
    <div className="grid w-full items-center gap-1.5 sm:max-w-sm">
      <Label htmlFor={label} className="translate-x-[4px] capitalize">
        {label}
      </Label>
      <div className="relative" ref={inputContainer}>
        <Input
          ref={inputRef}
          autoComplete="off"
          type="number"
          // required
          id={label}
          value={inputValue}
          onClick={() => setShowSuggestions(true)}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
          onFocus={handleFocus}
          onBlur={handleBlur}
          placeholder={placeholder}
          className="border-[2px] border-grayBorder bg-transparent text-white"
          role="combobox"
          aria-expanded={showSuggestions}
          aria-activedescendant={
            selectedSuggestion >= 0
              ? `suggestion-${selectedSuggestion}`
              : undefined
          }
          {...props}
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
  );
};

export default AutoCompleteInput;
