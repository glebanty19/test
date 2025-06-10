import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import type { UniversalSwiperProps } from "../types";
import { Swiper as SwiperType } from "swiper";
import "./UniversalSwiper.scss";

export const UniversalSwiper: React.FC<UniversalSwiperProps> = ({
  children,
  title = "Voices of Success with Sales Fortuna",
  className = "",
}) => {
  const swiperRef = useRef<SwiperType | null>(null);
  const [currentDot, setCurrentDot] = useState(0);

  const handleSlideChange = (swiper: SwiperType) => {
    console.log("Slide changed to:", swiper.activeIndex);
    setCurrentDot(swiper.activeIndex % 2);
  };

  const handleDotClick = (dotIndex: number) => {
    if (swiperRef.current) {
      const currentSlide = swiperRef.current.activeIndex;
      const targetSlide =
        dotIndex === 0
          ? currentSlide % 2 === 0
            ? currentSlide
            : currentSlide + 1
          : currentSlide % 2 === 1
          ? currentSlide
          : currentSlide + 1;

      swiperRef.current.slideTo(targetSlide);
    }
  };

  return (
    <div className={`universal-swiper ${className}`}>
      <div className="universal-swiper__container">
        <h1 className="universal-swiper__title">{title}</h1>

        <div className="universal-swiper__wrapper">
          <button
            onClick={() => {
              console.log("Prev clicked");
              swiperRef.current?.slidePrev();
            }}
            className="universal-swiper__nav-btn universal-swiper__nav-btn--prev"
            aria-label="Previous slide"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"
                className="universal-swiper__nav-icon"
              />
            </svg>
          </button>

          <Swiper
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
              console.log("Swiper initialized");
            }}
            slidesPerView={3}
            spaceBetween={18}
            grabCursor={true}
            modules={[Pagination]}
            className="universal-swiper__slider"
            cssMode={false}
            loop={true}
            autoplay={false}
            allowTouchMove={true}
            simulateTouch={true}
            watchOverflow={true}
            slidesPerGroup={1}
            centeredSlides={false}
            initialSlide={0}
            onSlideChange={handleSlideChange}
            pagination={false}
            breakpoints={{
              320: {
                slidesPerView: 1,
                spaceBetween: 18,
                slidesPerGroup: 1,
                centeredSlides: true,
              },
              400: {
                slidesPerView: 1.5,
                spaceBetween: 18,
                slidesPerGroup: 1,
                centeredSlides: false,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 18,
                slidesPerGroup: 1,
                centeredSlides: false,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 18,
                slidesPerGroup: 1,
                centeredSlides: false,
              },
            }}
          >
            {children ? (
              Array.isArray(children) ? (
                Array.from({ length: 20 }, (_, index) => {
                  const childIndex = index % React.Children.count(children);
                  const child = React.Children.toArray(children)[childIndex];
                  return (
                    <SwiperSlide
                      key={index}
                      className="universal-swiper__slide"
                    >
                      {child}
                    </SwiperSlide>
                  );
                })
              ) : (
                Array.from({ length: 20 }, (_, index) => (
                  <SwiperSlide key={index} className="universal-swiper__slide">
                    {children}
                  </SwiperSlide>
                ))
              )
            ) : (
              <SwiperSlide className="universal-swiper__slide">
                <div className="universal-swiper__empty">
                  <span className="universal-swiper__empty-text">
                    No content
                  </span>
                </div>
              </SwiperSlide>
            )}
          </Swiper>

          <button
            onClick={() => {
              console.log("Next clicked");
              swiperRef.current?.slideNext();
            }}
            className="universal-swiper__nav-btn universal-swiper__nav-btn--next"
            aria-label="Next slide"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M8.59 16.59L10 18l6-6-6-6-1.41 1.41L13.17 12z"
                className="universal-swiper__nav-icon"
              />
            </svg>
          </button>
          <div className="universal-swiper__pagination">
            {[0, 1].map((dotIndex) => (
              <button
                key={dotIndex}
                onClick={() => handleDotClick(dotIndex)}
                className={`universal-swiper__pagination-bullet ${
                  currentDot === dotIndex
                    ? "universal-swiper__pagination-bullet--active"
                    : ""
                }`}
                aria-label={`Go to dot ${dotIndex + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
