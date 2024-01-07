import React from "react";

import { Button } from "../ui/button";

import "./Suggestions.css";

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
        className={`custom-scrollbar absolute bottom-full left-0 right-0 z-20 mb-2 h-max max-h-64 w-full  max-w-sm divide-y divide-grayBorder divide-opacity-100 overflow-y-auto rounded-lg border border-grayBorder
        bg-[#09090b] py-2 text-sm text-white shadow-[0_3px_10px_rgb(255,255,255,0.2)] md:top-full md:mb-0 md:mt-2`}
      >
        {suggestions.map((width, index) => (
          <li className="flex w-full" key={index}>
            <Button
              type="button"
              variant={"ghost"}
              onClick={(event) => handleSuggestionClick(event, width)}
              className={`w-full cursor-pointer justify-start rounded-none p-3 font-normal hover:bg-[rgba(255,255,255,0.2)] hover:text-white md:p-2.5 ${
                index === selectedSuggestion
                  ? "bg-[rgba(255,255,255,0.2)] font-medium"
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
