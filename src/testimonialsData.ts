import type { Testimonial } from './types';

export const DEFAULT_TESTIMONIALS: Testimonial[] = [
  {
    id: 'serene',
    company: 'Serene Living Products',
    logo: '/img/logo1.jpg',
    logoAlt: 'Serene Living Products logo',
    text: 'Sales Fortuna made managing sales easier and helped us focus on customers. Its tools have been crucial for our growth and client satisfaction.',
    author: {
      name: 'Ethan Morgan',
      position: 'Founder and CEO, Serene Living Products',
      avatar: '/img/avatar1.jpg'
    }
  },
  {
    id: 'starlight',
    company: 'Starlight Creations',
    logo: '/img/logo2.jpg',
    logoAlt: 'Starlight Creations logo',
    text: 'Sales Fortuna has made sales so much easier for us. It saves time, simplifies the whole process, and helps us find more deals without extra hassle.',
    author: {
      name: 'Olivia Hayes',
      position: 'Owner, Starlight Creations',
      avatar: '/img/avatar2.jpg'
    }
  },
  {
    id: 'opulent',
    company: 'Opulent Living Group',
    logo: '/img/logo3.jpg',
    logoAlt: 'Opulent Living Group logo',
    text: 'Sales Fortuna has simplified our lead generation, helping us attract qualified prospects effortlessly and drive consistent growth.',
    author: {
      name: 'Alexander Reed',
      position: 'Co-Founder, Opulent Living Group',
      avatar: '/img/avatar3.jpg'
    }
  }
];