import React from "react";
import { UniversalSwiper } from "./UniversalSwiper/UniversalSwiper";
import { TestimonialCard } from "./TestimonialCard/TestimonialCard";
import { DEFAULT_TESTIMONIALS } from "./testimonialsData";

export const TestimonialsPage: React.FC = () => {
  return (
    <UniversalSwiper title="Voices of Success with Sales Fortuna">
      {DEFAULT_TESTIMONIALS.map((testimonial) => (
        <TestimonialCard key={testimonial.id} testimonial={testimonial} />
      ))}
    </UniversalSwiper>
  );
};

export default TestimonialsPage;
