import React from "react";

import { AlertCircle } from "lucide-react";

interface ErrorMessageProps {
  message: string;
}

const ErrorMessage: React.FC<ErrorMessageProps> = ({ message }) => {
  return (
    <div className="mt-1 flex max-w-sm translate-x-1 items-center gap-x-2">
      <AlertCircle className="h-4 w-4 text-error-600" />
      <p className="text-xs text-red-500">{message}</p>
    </div>
  );
};

export default ErrorMessage;
