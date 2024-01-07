import React from "react";

import { Button } from "../ui/button";

interface SuggestionsProps {
  suggestions: number[];
  selectedSuggestion: number;
  handleSuggestionClick: (event: React.MouseEvent, width: number) => void;
}

const suggestionBoxPosition = {
  mobile: "bottom-full left-0 right-0 mb-4",
  desktop: "top-full left-0 right-0 mt-4",
};

const Suggestions = React.forwardRef<HTMLUListElement, SuggestionsProps>(
  ({ suggestions, selectedSuggestion, handleSuggestionClick }, ref) => {
    return (
      <ul
        ref={ref}
        className={`absolute bottom-full left-0 right-0 z-20 mb-4 h-max max-h-64 w-full  max-w-sm divide-y divide-grayBorder border divide-opacity-100 overflow-y-auto rounded-md border-grayBorder
        bg-[#212121] text-sm text-white shadow-lg
        md:top-full  md:mb-0 md:mt-4`}
      >
        {suggestions.map((width, index) => (
          <li className="flex w-full" key={index}>
            <Button
              type="button"
              variant={"ghost"}
              onClick={(event) => handleSuggestionClick(event, width)}
              className={`w-full cursor-pointer justify-start rounded-none p-3 font-normal hover:bg-white/10 hover:text-white md:p-2.5 ${
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
