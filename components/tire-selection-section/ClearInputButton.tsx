import React from "react";

import { X } from "lucide-react";
import { Button } from "../ui/button";

interface ClearInputButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  handleClearInput: () => void;
}

const ClearInputButton: React.FC<ClearInputButtonProps> = ({
  handleClearInput,
  ...props
}) => {
  return (
    <Button
      type="button"
      onClick={handleClearInput}
      size={"icon"}
      variant={"ghost"}
      className="absolute right-1 top-1/2 h-max w-max -translate-y-1/2 p-1.5 hover:bg-white/10 hover:text-white"
      aria-label="Clear input"
      {...props}
    >
      <X className="h-4 w-4 text-white" />
    </Button>
  );
};

export default ClearInputButton;
