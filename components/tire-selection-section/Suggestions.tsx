import React from "react";

import { Button } from "../ui/button";

interface SuggestionsProps {
  suggestions: number[];
  selectedSuggestion: number;
  handleSuggestionClick: (event: React.MouseEvent, width: number) => void;
}

const Suggestions = React.forwardRef<HTMLUListElement, SuggestionsProps>(
  ({ suggestions, selectedSuggestion, handleSuggestionClick }, ref) => {
    return (
      <ul
        ref={ref}
        className="absolute left-0 right-0 top-full z-20 mt-4 flex max-w-sm  flex-col rounded-md border border-grayBorder bg-[#212121] text-white"
      >
        {suggestions.map((width, index) => (
          <li key={index} className="flex w-full">
            <Button
              type="button"
              variant={"ghost"}
              onClick={(event) => handleSuggestionClick(event, width)}
              className={`w-full cursor-pointer justify-start rounded-none p-2 font-normal hover:bg-white/10 hover:text-white ${
                index === selectedSuggestion
                  ? "bg-[#323236] font-medium text-white"
                  : ""
              }`}
              id={`suggestion-${index}`}
            >
              {width}
            </Button>
          </li>
        ))}
      </ul>
    );
  },
);

Suggestions.displayName = "Suggestions";

export default Suggestions;
