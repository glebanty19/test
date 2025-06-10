import React from "react";
import type { TestimonialCardProps } from "../types";
import './TestimonialCard.scss'

export const TestimonialCard: React.FC<TestimonialCardProps> = ({
  testimonial,
}) => (
  <div className="testimonial-card">
    <div className="testimonial-card__header">
      <img
        src={testimonial.logo}
        alt={testimonial.logoAlt}
        className="testimonial-card__logo"
      />
    </div>

    <div className="testimonial-card__quote">
      <p className="testimonial-card__text">{testimonial.text}</p>
      <span className="testimonial-card__quote-mark testimonial-card__quote-mark--close">
        "
      </span>
    </div>

    <div className="testimonial-card__author">
      <img
        src={testimonial.author.avatar}
        alt={testimonial.author.name}
        className="testimonial-card__avatar"
      />
      <div className="testimonial-card__author-info">
        <p className="testimonial-card__author-name">
          {testimonial.author.name}
        </p>
        <p className="testimonial-card__author-position">
          {testimonial.author.position}
        </p>
      </div>
    </div>
  </div>
);
