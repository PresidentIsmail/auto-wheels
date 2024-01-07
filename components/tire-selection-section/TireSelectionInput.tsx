"use client";

import React, { useState, useEffect } from "react";

import {
  tireSizes,
  DEFAULT_TIRE_WIDTHS,
  DEFAULT_TIRE_PROFILES,
  DEFAULT_TIRE_DIAMETERS,
} from "@/data/TireData";

import { Search, Loader } from "lucide-react";
import { Button } from "../ui/button";
import AutoCompleteInput from "./AutoCompleteInput";

const TireSelectionInput: React.FC = () => {
  const [widthInput, setWidthInput] = useState("");
  const [profileInput, setProfileInput] = useState("");
  const [diameterInput, setDiameterInput] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [disableSearch, setDisableSearch] = useState(false);
  const [inputsComplete, setInputsComplete] = useState(0);

  const [widthSuggestions, setWidthSuggestions] =
    useState<number[]>(DEFAULT_TIRE_WIDTHS);
  const [profileSuggestions, setProfileSuggestions] = useState<number[]>(
    DEFAULT_TIRE_PROFILES,
  );
  const [diameterSuggestions, setDiameterSuggestions] = useState<number[]>(
    DEFAULT_TIRE_DIAMETERS,
  );

  // Update inputsComplete state when any of the inputs change
  useEffect(() => {
    const inputs = [widthInput, profileInput, diameterInput];
    const inputsComplete = inputs.filter((input) => input !== "").length;
    setInputsComplete(inputsComplete);
  }, [widthInput, profileInput, diameterInput]);

  // Filter width suggestions based on entered profile and diameter
  useEffect(() => {
    // if the input is empty, show default suggestions
    if (profileInput === "" && diameterInput === "") {
      setWidthSuggestions(DEFAULT_TIRE_WIDTHS);
      return;
    }

    // Filter width suggestions based on entered profile and diameter
    const selectedTires = tireSizes.filter((tire) => {
      const profileMatches =
        profileInput === "" || tire.profile === parseInt(profileInput);
      const diameterMatches =
        diameterInput === "" || tire.diameter === parseInt(diameterInput);
      return profileMatches && diameterMatches;
    });

    // Extract unique widths from the selected tires
    const uniqueFilteredWidths = [
      ...new Set(selectedTires.map((tire) => tire.width)),
    ];

    setWidthSuggestions(uniqueFilteredWidths);
  }, [profileInput, diameterInput]);

  // Filter profile suggestions based on entered width and diameter
  useEffect(() => {
    // if the input is empty, show default suggestions
    if (widthInput === "" && diameterInput === "") {
      setProfileSuggestions(DEFAULT_TIRE_PROFILES);
      return;
    }

    // Filter profile suggestions based on entered width and diameter
    const selectedTires = tireSizes.filter((tire) => {
      const widthMatches =
        widthInput === "" || tire.width === parseInt(widthInput);
      const diameterMatches =
        diameterInput === "" || tire.diameter === parseInt(diameterInput);
      return widthMatches && diameterMatches;
    });

    // Extract unique profiles from the selected tires
    const uniqueFilteredProfiles = [
      ...new Set(selectedTires.map((tire) => tire.profile)),
    ];

    setProfileSuggestions(uniqueFilteredProfiles);
  }, [widthInput, diameterInput]);

  // Filter diameter suggestions based on entered width and profile
  useEffect(() => {
    // if the input is empty, show default suggestions
    if (widthInput === "" && profileInput === "") {
      setDiameterSuggestions(DEFAULT_TIRE_DIAMETERS);
      return;
    }

    // Filter diameter suggestions based on entered width and profile
    const selectedTires = tireSizes.filter((tire) => {
      const widthMatches =
        widthInput === "" || tire.width === parseInt(widthInput);
      const profileMatches =
        profileInput === "" || tire.profile === parseInt(profileInput);
      return widthMatches && profileMatches;
    });

    // Extract unique diameters from the selected tires
    const uniqueFilteredDiameters = [
      ...new Set(selectedTires.map((tire) => tire.diameter)),
    ];

    setDiameterSuggestions(uniqueFilteredDiameters);
  }, [widthInput, profileInput]);

  const resetInputs = () => {
    setWidthInput("");
    setProfileInput("");
    setDiameterInput("");
  };

  const handleSearch = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log(
      `{ width: ${widthInput}, profile: ${profileInput}, diameter: ${diameterInput} }`,
    );

    setSubmitting(false);
    resetInputs();
  };

  return (
    <>
      <form
        onSubmit={handleSearch}
        className="relative flex w-full flex-col items-start gap-x-6 gap-y-4 sm:flex-row sm:gap-y-0"
      >
        {/* Width Input */}
        <AutoCompleteInput
          inputValue={widthInput}
          setInputValue={setWidthInput}
          setDisableSearch={setDisableSearch}
          label="Width"
          placeholder="e.g. 205"
          suggestionData={widthSuggestions}
        />

        {/* Profile Input */}
        <AutoCompleteInput
          inputValue={profileInput}
          setInputValue={setProfileInput}
          setDisableSearch={setDisableSearch}
          label="Profile"
          placeholder="e.g. 55"
          suggestionData={profileSuggestions}
        />

        {/* Diameter Input */}
        <AutoCompleteInput
          inputValue={diameterInput}
          setInputValue={setDiameterInput}
          setDisableSearch={setDisableSearch}
          label="Diameter"
          placeholder="e.g. 16"
          suggestionData={diameterSuggestions}
        />

        {/* Search Button */}
        <Button
          type="submit"
          disabled={submitting || disableSearch}
          variant={"outline"}
          className="mt-4 h-10 w-full rounded-md border-[1px] bg-[#212121] hover:bg-[#212121]/30 hover:text-white sm:ml-8 sm:min-w-28 sm:max-w-28 md:translate-y-1 lg:min-w-36 lg:max-w-36"
        >
          {submitting ? (
            <Loader className="h-4 w-4 animate-spin" />
          ) : (
            <>
              Search <Search className="ml-2 h-4 w-4 text-brand" />
            </>
          )}
        </Button>
      </form>

      {/* Progress Indicator will fill when inputs are being filled*/}
      <div className="absolute bottom-0 left-0 z-10 h-[3px] bg-grayBorder w-full" />
      <div
        className="absolute bottom-0 left-0 z-10 h-[3px] bg-brand"
        style={{
          width: `${(inputsComplete / 3) * 100}%`,
          transition: "width 0.2s ease-in-out",
        }}
      />
    </>
  );
};

export default TireSelectionInput;
