import { useEffect, useState } from "react";
import styled from "styled-components";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { fontSize, fontWeight, theme } from "@styles/theme";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons";

export interface ICarouselInfo {
   id: string;
   deposition: string;
   name: string;
}

export interface ICarouselProps {
   info: ICarouselInfo[];
   slidesNumber: number;
   spaceBetween?: number;
}

export const DepositionsCarousel: React.FC<ICarouselProps> = ({
   info,
   slidesNumber,
   spaceBetween,
}) => {
   const [slidesPerView, setSlidesPerView] = useState<number>(2);

   useEffect(() => {
      const handleResize = () => {
         const smallDevicesScreen = window.innerWidth < 768;
         smallDevicesScreen
            ? setSlidesPerView(slidesNumber - 1)
            : setSlidesPerView(slidesNumber);
      };
      handleResize();

      window.addEventListener("resize", handleResize);
      return () => {
         window.removeEventListener("resize", handleResize);
      };
   }, [slidesNumber]);

   return (
      <Container>
         <Swiper
            modules={[Pagination, Navigation, Autoplay]}
            loop={true}
            className="swiper"
            spaceBetween={spaceBetween ? spaceBetween : 50}
            slidesPerView={slidesPerView}
            navigation
            pagination={{
               dynamicBullets: true,
               clickable: true,
            }}
            autoplay={{
               disableOnInteraction: false,
            }}
         >
            {info.map((item) => (
               <SwiperSlide key={item.id} className="slide">
                  <FontAwesomeIcon icon={faQuoteLeft} className="slideIcon" />
                  <p className="slideText">"{item.deposition}"</p>
                  <h3 className="itemDescription">{item.name}</h3>
               </SwiperSlide>
            ))}
         </Swiper>
      </Container>
   );
};

const Container = styled.div`
   display: flex;
   align-items: center;
   gap: 1rem;
   width: 100%;

   .swiper {
      width: 100%;
      border-radius: 1rem;
      padding: 0rem 3rem;

      .swiper-button-next,
      .swiper-button-prev {
         color: ${theme.secondaryColor};
         transition: 0.3s;
         opacity: 0.8;

         &:hover {
            opacity: 1;
            scale: 1.2;
         }
      }

      .swiper-button-next {
         right: 0rem;
         transform: translateY(-50%);
      }

      .swiper-button-prev {
         left: 0rem;
         transform: translateY(-50%);
      }

      .swiper-pagination-bullet {
         background: ${theme.tertiaryColor};
         width: 1.5rem;
         height: 1.5rem;
      }

      .slide {
         display: flex;
         flex-direction: column;
         align-items: center;
         margin-bottom: 4rem;
         user-select: none;
         cursor: default;
         -webkit-user-select: none; /* Safari */
         -moz-user-select: none; /* Firefox */
         -ms-user-select: none; /* Internet Explorer/Edge */
         max-width: 100%;

         .slideText {
            font-size: ${fontSize.smallSize};
            text-align: center;
            padding: 1rem;
            font-weight: ${fontWeight.thin};
            max-width: 100%;
         }

         .slideIcon {
            font-size: 5rem;
            color: ${theme.secondaryColor};
         }

         .itemDescription {
            font-size: ${fontSize.mediumSize};
            text-align: center;
            color: ${theme.secondaryColor};
         }
      }
   }

   @media (max-width: 768px) {
      .swiper {
         border: solid .2rem ${theme.primaryColor};

         .swiper-button-next {
            transform: none;
            bottom: 1rem;
            top: auto;
            right: 1rem;
         }

         .swiper-button-prev {
            transform: none;
            bottom: 1rem;
            top: auto;
            left: 1rem;
         }

         .slide {
            font-size: ${fontSize.basicSize};
            margin: auto;
            padding: 1rem 0.25rem 4rem;
            border-radius: 1rem;

            .itemDescription {
               font-size: ${fontSize.basicSize};
            }
         }
      }
   }

   @media (max-width: 425px) {
      .swiper {
         .slide {
            .slideIcon {
               font-size: ${fontSize.extraLargeSize};
            }

            .itemDescription {
               font-size: ${fontSize.smallSize};
            }
         }
      }
   }
`;
