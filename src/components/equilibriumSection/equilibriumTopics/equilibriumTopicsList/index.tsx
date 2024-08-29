import styled from "styled-components";
import { fontSize, fontWeight, theme } from "@styles/theme";
import { IEquilibriumTopicEdge } from "@utils/blogInterfaces";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
   faAdd,
   faHourglassHalf,
   faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { useContext, useEffect, useState } from "react";
import { CarouselContext } from "@contexts/caroulselContext";

interface ITherapiesListProps {
   slidesPerView: number;
   info: IEquilibriumTopicEdge[];
   imagesHeightInRem: number;
   loadMore: () => void;
   hasMore: boolean;
   loading: boolean;
}

export const EquilibriumTopicsList: React.FC<ITherapiesListProps> = ({
   slidesPerView,
   info,
   loadMore,
   hasMore,
   loading,
   imagesHeightInRem,
}) => {
   const { setCurrentTopicId } = useContext(CarouselContext);
   const [slides, setSlides] = useState<number>(slidesPerView);

   useEffect(() => {
      const handleSlidesPerView = () => {
         const largeDevicesScreenSize = window.innerWidth > 768;
         const smallDevicesScreenSize = window.innerWidth > 425;

         switch (true) {
            case largeDevicesScreenSize:
               setSlides(slidesPerView);
               break;
            case smallDevicesScreenSize:
               setSlides(slidesPerView - 1);
               break;
            default:
               setSlides(Math.max(slidesPerView - 2, 1));
         }
      };

      handleSlidesPerView();

      window.addEventListener("resize", handleSlidesPerView);
      return () => window.removeEventListener("resize", handleSlidesPerView);
   }, [slidesPerView]);

   return (
      <Container $imagesHeightInRem={imagesHeightInRem}>
         <Swiper
            slidesPerView={slides}
            spaceBetween={10}
            freeMode={true}
            pagination={{
               dynamicBullets: true,
            }}
            navigation={true}
            modules={[Navigation, Pagination]}
            scrollbar={false}
            className="swiper"
         >
            {info?.map((topic, index) => (
               <SwiperSlide
                  key={topic.node.id}
                  className="slide"
                  onClick={() => setCurrentTopicId(topic.node.id)}
               >
                  {topic.node.imagem?.url ? (
                     <img
                        className="slideImage"
                        src={topic.node.imagem.url ? topic.node.imagem.url : ""}
                        alt={`Terapia ${topic.node.nome}`}
                     />
                  ) : (
                     <div className="imageNotFound">
                        <FontAwesomeIcon
                           icon={faMagnifyingGlass}
                           className="icon"
                        />
                        <h3 className="imageNotFoundTitle">
                           Imagem não encontrada
                        </h3>
                     </div>
                  )}

                  <h3 className="therapyName">{topic.node.nome}</h3>
                  <span className="topicIndex">
                     {index >= 9 ? index + 1 : `0${index + 1}`}
                  </span>
               </SwiperSlide>
            ))}
            {hasMore && (
               <SwiperSlide className="loadMore">
                  {loading ? (
                     <div className="loading">
                        <FontAwesomeIcon
                           icon={faHourglassHalf}
                           spin
                           className="icon"
                        />
                     </div>
                  ) : (
                     <button
                        className="button"
                        onClick={loadMore}
                        title="Carregar mais"
                     >
                        <FontAwesomeIcon icon={faAdd} className="icon" />
                        <span>Carregar mais</span>
                     </button>
                  )}
               </SwiperSlide>
            )}
         </Swiper>
      </Container>
   );
};

const Container = styled.div<{ $imagesHeightInRem: number }>`
   display: flex;
   align-items: center;
   gap: 1rem;
   width: 100%;
   padding: 2rem;
   border-radius: 1rem;

   .swiper {
      max-width: 100%;

      .slide {
         display: flex;
         flex-direction: column;
         align-items: center;
         margin-bottom: 4rem;
         user-select: none;
         cursor: pointer;
         -webkit-user-select: none; /* Safari */
         -moz-user-select: none; /* Firefox */
         -ms-user-select: none; /* Internet Explorer/Edge */
         position: relative;

         .slideImage {
            height: ${(props) => `${props.$imagesHeightInRem}rem`};
            width: 100%;
            min-width: 10rem;
            object-fit: cover;
            border-radius: 1rem;
            border: 0.3rem solid ${theme.secondaryColor};
            transition: opacity 0.5s;
         }

         .imageNotFound {
            height: ${(props) => `${props.$imagesHeightInRem}rem`};
            width: 100%;
            min-width: 10rem;

            display: flex;
            flex-direction: column;
            border-radius: 1rem;
            border: 0.3rem solid ${theme.secondaryColor};
            transition: opacity 0.5s;
            justify-content: center;
            align-items: center;
            color: ${theme.textColor};

            .icon {
               font-size: ${fontSize.basicSize};
            }

            .imageNotFoundTitle {
               font-size: ${fontSize.basicSize};
               font-weight: ${fontWeight.medium};
               text-align: center;
            }
         }

         .therapyName {
            font-size: ${fontSize.basicSize};
            text-align: center;
            padding: 1rem;
            font-weight: ${fontWeight.medium};
            max-width: 100%;
            transition: color 0.5s;
            position: relative;

            &::after {
               content: "";
               position: absolute;
               bottom: 0;
               left: -12.5%;
               width: 125%;
               height: 0.2rem;
               background: linear-gradient(
                  to right,
                  transparent 0%,
                  ${theme.tertiaryColor} 20%,
                  ${theme.tertiaryColor} 80%,
                  transparent 100%
               );
               transition: opacity 0.5s, transform 0.5s;
               transform: scaleX(0);
               opacity: 0;
            }
         }

         .topicIndex {
            font-size: ${fontSize.basicSize};
            font-weight: ${fontWeight.medium};
            opacity: 1;
            color: ${theme.secondaryTextColor};
            position: absolute;
            left: 1rem;
            top: 1rem;
            border: solid 0.2rem ${theme.secondaryTextColor};
            width: 3.5rem;
            height: 3.5rem;
            display: flex;
            justify-content: center;
            align-items: center;
            border-radius: 50%;
            opacity: 0.8;
         }

         &:hover {
            .slideImage {
               opacity: 0.8;
            }

            .therapyName {
               color: ${theme.tertiaryColor};

               &::after {
                  transform: scaleX(1);
                  opacity: 1;
               }
            }
         }
      }

      .swiper-pagination-bullet {
         background: ${theme.secondaryColor};
         opacity: 1;

         &.swiper-pagination-bullet-active-main {
            background: ${theme.shadowColor};
         }
      }

      .swiper-button-prev,
      .swiper-button-next {
         transition: scale 0.3s;
         color: ${theme.tertiaryColor};
         filter: drop-shadow(0 0 0.5rem ${theme.tertiaryColor});
         bottom: 1rem;
         top: auto;

         &:hover {
            scale: 1.2;
         }
      }

      .loadMore {
         height: ${(props) => `${props.$imagesHeightInRem}rem`};
         display: flex;
         justify-content: center;
         align-items: center;

         .loading {
            color: ${theme.shadowColor};
            border: solid 0.2rem ${theme.shadowColor};
            box-shadow: 0 0 1rem ${theme.shadowColor};
            border-radius: 50%;
            width: 6rem;
            height: 6rem;
            display: flex;
            justify-content: center;
            align-items: center;

            .icon {
               font-size: ${fontSize.extraLargeSize};
            }
         }

         .button {
            border-radius: 1rem;
            padding: 0.5rem 1rem;
            font-size: ${fontSize.basicSize};
            cursor: pointer;
            display: flex;
            align-items: center;
            gap: 0.5rem;
            border: solid 0.2rem transparent;
            color: ${theme.secondaryTextColor};
            background-color: ${theme.secondaryColor};
            transition: 0.5s;

            .icon {
               font-size: ${fontSize.smallSize};
            }

            &:hover {
               border: solid 0.2rem ${theme.secondaryTextColor};
               scale: 1.05;
               box-shadow: 0 0 1rem ${theme.shadowColor};
            }
         }
      }
   }

   @media (max-width: 768px) {
      .swiper {
         .slide {
            .slideImage,
            .imageNotFound {
               height: calc(${(props) => `${props.$imagesHeightInRem}rem`} * 0.75);
            }
         }

         .loadMore {
            height: calc(${(props) => `${props.$imagesHeightInRem}rem`} * 0.75);

            span {
               display: none;
            }

            .button {
               padding: 1rem;
            }
         }
      }
   }

   @media (max-width: 425px) {
      .swiper {
         .slide {
            .slideImage,
            .imageNotFound {
               height: calc(${(props) => `${props.$imagesHeightInRem}rem`} * 0.5);
            }
         }

         .loadMore {
            height: calc(${(props) => `${props.$imagesHeightInRem}rem`} * 0.5);
         }
      }
   }
`;
