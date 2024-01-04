"use client";

import React from "react";

import { Search, X } from "lucide-react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

const TireSelectionInput: React.FC = () => {
  return (
    <form className="flex w-full items-end">
      <div className="grid max-w-sm items-center gap-1.5">
        <Label htmlFor="width">Width</Label>
        <div className="relative">
          <Input
            type="number"
            min="0"
            id="width"
            placeholder="eg: 195"
            className="border-[2px] border-grayBorder bg-transparent text-white"
          />
          <Button
            size={"icon"}
            variant={"ghost"}
            className="absolute right-0 top-1/2 h-max w-max -translate-x-1/2 -translate-y-1/2 p-1.5 hover:bg-white/10 hover:text-white"
          >
            <X className="h-4 w-4 text-white" />
          </Button>
        </div>
      </div>

      <Button
        variant={"outline"}
        className="ml-12 h-10 rounded-md border-[2px] hover:bg-white/10 hover:text-white"
      >
        Search <Search className="ml-2 h-4 w-4 text-brand" />
      </Button>
    </form>
  );
};

export default TireSelectionInput;

// radial-gradient(circle at 50% 100%, #323236, #252529)
