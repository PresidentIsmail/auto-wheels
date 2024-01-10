import React from "react";

import { cn } from "@/lib/utils";

import { Star } from "lucide-react";

type StarsProps = {
  rating: number;
  className?: string;
};

const Stars: React.FC<StarsProps> = ({ rating, className }) => {
  const fullStars = Math.floor(rating);
  const partialStarFillPercentage = (rating - fullStars) * 100;

  return (
    <div className={(cn("flex items-center gap-x-1"), className)}>
      {[...Array(fullStars)].map((_, i) => (
        <Star
          key={i}
          className="h-4 w-4 fill-[#f8b700] text-[#f8b700]"
          aria-hidden
        />
      ))}
      {partialStarFillPercentage > 0 && (
        <Star
          className="h-4 w-4 fill-[#f8b700] text-[#f8b700]"
          aria-hidden
          style={{
            clipPath: `inset(0 ${100 - partialStarFillPercentage}% 0 0)`,
          }}
        />
      )}
    </div>
  );
};

export default Stars;
