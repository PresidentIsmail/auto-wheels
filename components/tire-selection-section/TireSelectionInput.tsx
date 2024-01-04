"use client";

import React, { useState } from "react";

import { tireData } from "@/data/TireData";

import { Search, X } from "lucide-react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

const TireSelectionInput: React.FC = () => {
  const [inputValue, setInputValue] = useState<string>("");
  const [suggestions, setSuggestions] = useState<number[]>([]);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const input = event.target.value;
    setInputValue(input);

    // Filter available widths based on user input
    const matchingWidths = tireData[14].widths.filter((width) =>
      width.toString().startsWith(input),
    );

    setSuggestions(matchingWidths);
  };

  const handleSearch = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Handle the search logic based on the selected width (inputValue)
    console.log(`Searching for width: ${inputValue}`);
  };

  const handleSuggestionClick = (width: number) => {
    // Set the selected width from suggestions
    setInputValue(width.toString());
    setSuggestions([]);
  };

  const handleClearInput = () => {
    setInputValue("");
    setSuggestions([]);
  };

  return (
    <form onSubmit={handleSearch} className="flex w-full items-end">
      <div className="grid max-w-sm items-center gap-1.5">
        <Label htmlFor="width">Width</Label>
        <div className="relative">
          <Input
            autoComplete="off"
            type="number"
            name="width"
            id="width"
            min="0"
            value={inputValue}
            onChange={handleInputChange}
            placeholder="eg: 195"
            className="border-[2px] border-grayBorder bg-transparent text-white"
          />
          {/* Clear Input */}
          {inputValue.length > 0 && (
            <Button
              onClick={handleClearInput}
              size={"icon"}
              variant={"ghost"}
              className="absolute right-1 top-1/2 h-max w-max -translate-y-1/2 p-1.5 hover:bg-white/10 hover:text-white"
            >
              <X className="h-4 w-4 text-white" />
            </Button>
          )}
          {/* Suggestions */}
          {suggestions.length > 0 && (
            <ul
              className="absolute left-0 right-0 top-full mt-4 flex max-w-sm flex-col rounded-md border border-grayBorder text-white"
              style={{
                backgroundColor:
                  "radial-gradient(circle at 50% 100%, #323236, #252529)",
              }}
            >
              {suggestions.map((width, index) => (
                <li
                  key={index}
                  className="cursor-pointer p-2 hover:bg-[#323236] hover:text-white"
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
