export interface Author {
  name: string;
  position: string;
  avatar: string;
}

export interface Testimonial {
  id: string;
  company: string;
  logo: string;
  logoAlt: string;
  text: string;
  author: Author;
}

export interface TestimonialCardProps {
  testimonial: Testimonial;
}

export interface UniversalSwiperProps {
  children?: React.ReactNode;
  title?: string;
  className?: string;
}