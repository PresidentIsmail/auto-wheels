"use client";

import React, { useRef, useState } from "react";

import {
  tireData,
  DEFAULT_TIRE_WIDTHS,
  DEFAULT_TIRE_PROFILES,
  DEFAULT_TIRE_DIAMETERS,
} from "@/data/TireData";

import { Search } from "lucide-react";
import { Label } from "../ui/label";
import { Button } from "../ui/button";
import AutoCompleteInput from "./AutoCompleteInput";

const TIRE_DIAMETER = 14;
const INITIAL_SUGGESTIONS = tireData[TIRE_DIAMETER].widths;

const TireSelectionInput: React.FC = () => {

  const [inputValue, setInputValue] = useState<string>("");
  const [suggestions, setSuggestions] = useState<number[]>(DEFAULT_TIRE_WIDTHS);


  

  const handleSearch = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(`Searching for width: ${inputValue}`);
  };

 

  return (
    <form onSubmit={handleSearch} className="relative flex w-full items-end">
      <div className="grid max-w-sm items-center gap-1.5">
        <Label htmlFor="width" className="translate-x-[4px]">
          Width
        </Label>
        <AutoCompleteInput 
          id="width"
          placeholder="e.g. 205"
          data={suggestions}
        />
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
