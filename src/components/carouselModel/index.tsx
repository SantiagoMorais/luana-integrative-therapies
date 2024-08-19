import { useContext, useEffect, useState } from "react"
import styled from "styled-components"

import { Swiper, SwiperSlide } from "swiper/react"
import { Pagination, Navigation, Autoplay } from "swiper/modules"
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { fontSize, fontWeight, theme } from "@styles/theme";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons";
import { CarouselContext } from "@contexts/caroulselContext";

export interface ICarouselInfo {
    id: string,
    content: string,
    description?: string,
    contentIsAText?: boolean,
}

export interface ICarouselProps {
    info: ICarouselInfo[],
    slidesNumber: number,
    imagesHeightInRem?: number,
    spaceBetween?: number,
    titleColor?: string,
    clickableContent?: boolean
}

export const CarouselSlides: React.FC<ICarouselProps> = ({ info, slidesNumber, imagesHeightInRem, spaceBetween, titleColor, clickableContent }) => {
    const [slidesPerView, setSlidesPerView] = useState<number>(2);
    const { setCurrentTopic } = useContext(CarouselContext);    

    useEffect(() => {
        const handleResize = () => {
            const smallDevicesScreen = window.innerWidth < 768
            smallDevicesScreen ? setSlidesPerView(slidesNumber - 1) : setSlidesPerView(slidesNumber)
        };
        handleResize()

        window.addEventListener("resize", handleResize)
        return () => { window.removeEventListener("resize", handleResize) }
    }, [slidesNumber])

    return (
        <Container $imagesHeight={imagesHeightInRem} $titleColor={titleColor} $clickabelContent={clickableContent}>
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
                {info.map(item =>
                    <SwiperSlide key={item.id} className="slide">
                        {item.contentIsAText
                            ? <>
                                <FontAwesomeIcon icon={faQuoteLeft} className="slideIcon" />
                                <p className="slideText">"{item.content}"</p>
                            </>
                            : <img
                                src={item.content}
                                alt="slideImage"
                                className="slideImage"
                                onClick={() => clickableContent ? setCurrentTopic(item.id) : ""}
                            />
                        }

                        <h3 className="itemDescription">
                            {item.description}
                        </h3>
                    </SwiperSlide>
                )}
            </Swiper>
        </Container>
    )
}

const Container = styled.div<{ $imagesHeight: number | undefined, $titleColor: string | undefined, $clickabelContent: boolean | undefined }>`
    display: flex;
    align-items: center;
    gap: 1rem;
    width: 100%;

    .swiper {
        width: 100%;
        border-radius: 1rem;
        padding: 0rem 2rem;

        .swiper-button-next, .swiper-button-prev {
            color: ${theme.secondaryColor};
            transition: .3s;
            opacity: .8;
            filter: drop-shadow(0 0 .2rem ${theme.textColor});

            &:hover {
                opacity: 1;
            }
        }

        .swiper-button-next {
            right: 0;
            position: absolute;
            transform: translateY(-50%);
        }
        
        .swiper-button-prev {
            left: 0;
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

            .slideImage {
                width: 100%;
                min-width: 10rem;
                width: 110%;
                object-fit: cover;
                border-radius: 1rem;
                border: .2rem solid ${theme.tertiaryColor};
                height: ${props => props.$imagesHeight ? `${props.$imagesHeight}rem` : 'auto'};
                ${props => props.$clickabelContent ? `
                    cursor: pointer;
                    transition: .3s;

                    &:hover {
                        opacity: .7;
                    }
                `
        : ""}
            }

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
                color: ${props => props.$titleColor ? props.$titleColor : theme.textColor}
            }
        }
    }

    @media (max-width: 768px) {
        .swiper {
            .swiper-button-next, .swiper-button-prev {
                scale: .5;
                                
                &:hover {
                    scale: .7;
                }
            }
    
            .slide {
                font-size: ${fontSize.basicSize};
    
                .slideImage {
                    max-height: 40rem;
                    height: ${props => props.$imagesHeight ? `${props.$imagesHeight}rem` : 'auto'};
                }

                .itemDescription {
                    font-size: ${fontSize.basicSize};
                }
            }
        }
    }

    @media (max-width: 425px) {
        .swiper {
            .slide {
                .slideImage {
                    max-height: 25rem;
                    height: ${props => props.$imagesHeight ? `${props.$imagesHeight * .6}rem` : 'auto'};
                }

                .slideIcon {
                    font-size: ${fontSize.extraLargeSize};
                }

                .itemDescription {
                    font-size: ${fontSize.smallSize};
                }
            }
        }
    }
`