import { FC } from "react";

import { testimonialData } from "@/data/testimonialData";

import TestimonialCard from "./TestimonialCard";

const TestimonialList: FC = () => {
  const firsthalf = testimonialData.slice(
    0,
    Math.floor(testimonialData.length / 2),
  );
  const secondhalf = testimonialData.slice(
    Math.floor(testimonialData.length / 2),
  );

  return (
    <article className="right-0 flex flex-col gap-y-4 lg:absolute lg:w-[50%] lg:flex-row lg:gap-x-8 lg:overflow-x-hidden xl:me-0">
      {/* Testimonials First Half */}
      <div className="flex flex-row gap-8 lg:flex-col lg:gap-12">
        {firsthalf.map((testimonial) => (
          <TestimonialCard key={testimonial.id} testimonial={testimonial} />
        ))}
      </div>
      {/* Testimonials Second Half */}
      <div className="flex flex-row gap-8 lg:flex-col lg:gap-12">
        {secondhalf.map((testimonial) => (
          <TestimonialCard key={testimonial.id} testimonial={testimonial} />
        ))}
      </div>
    </article>
  );
};

export default TestimonialList;
