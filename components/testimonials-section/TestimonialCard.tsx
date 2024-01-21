import React from "react";

import { testimonialData } from "@/data/testimonialData";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Stars from "../ui/Stars";

interface TestimonialCardProps {
  testimonial: (typeof testimonialData)[0];
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ testimonial }) => {
  // users initials, used for fallback in case of broken image
  const userInitials = testimonial.fullName
    .split(" ")
    .map((name) => name[0])
    .join("");

  return (
    <Card role="article" className="h-max w-[200px] shrink-0 md:w-[250px]">
      <CardHeader className="px-3 pb-4 pt-4 md:pb-6">
        {/* Stars */}
        <Stars rating={testimonial.rating} />
      </CardHeader>

      <CardContent className="px-3 pb-4 md:pb-6">
        {/* User comment */}
        <q className="text-xs text-muted-foreground md:text-sm">
          {testimonial.comment.length > 100
            ? `${testimonial.comment.substring(0, 100)}...`
            : testimonial.comment}
        </q>
      </CardContent>

      <CardFooter className="px-3 pb-2 md:pb-4">
        {/* User profile img and full name */}

        <div className="flex items-center gap-x-1">
          <Avatar>
            <AvatarImage
              src={testimonial.profileImgUrl}
              alt={testimonial.fullName}
              width={40}
              height={40}
              className="h-8 w-8 rounded-full md:h-10 md:w-10"
            />
            <AvatarFallback>{userInitials}</AvatarFallback>
          </Avatar>
          {/* User full name */}
          <CardTitle className="text-xs md:text-sm">
            {testimonial.fullName}
          </CardTitle>
        </div>
      </CardFooter>
    </Card>
  );
};

export default TestimonialCard;
