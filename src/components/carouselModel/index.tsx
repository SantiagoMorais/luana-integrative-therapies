import { useEffect, useState } from "react"
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
}

export const CarouselSlides: React.FC<ICarouselProps> = ({ info, slidesNumber, imagesHeightInRem, spaceBetween, titleColor }) => {
    const [slidesPerView, setSlidesPerView] = useState<number>(2)

    useEffect(() => {
        const handleResize = () => {
            const smallDevicesScreen = window.innerWidth < 768
            smallDevicesScreen ? setSlidesPerView(slidesNumber) : setSlidesPerView(slidesNumber + 1)
        };
        handleResize()

        window.addEventListener("resize", handleResize)
        return () => { window.removeEventListener("resize", handleResize) }
    }, [slidesNumber])

    return (
        <Container $imagesHeight={imagesHeightInRem} $titleColor={titleColor}>
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
                            ?
                            <>
                                <FontAwesomeIcon icon={faQuoteLeft} className="slideIcon" />
                                <p className="slideText">"{item.content}"</p>
                            </>
                            : <img src={item.content} alt="slideImage" className="slideImage" />
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

const Container = styled.div<{ $imagesHeight: number | undefined, $titleColor: string | undefined }>`
    display: flex;
    align-items: center;
    gap: 1rem;
    width: 100%;

    .swiper {
        width: 100%;
        border-radius: 1rem;
        padding: 0 4rem;

        .swiper-button-next, .swiper-button-prev {
            color: ${theme.secondaryColor};
            transition: .3s;
            opacity: .8;

            &:hover {
                scale: 1.2;
                opacity: 1;
            }
        }

        .swiper-button-next {
            right: 0;
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
                object-fit: cover;
                border-radius: 1rem;
                border: .2rem solid ${theme.tertiaryColor};
                height: ${props => props.$imagesHeight ? `${props.$imagesHeight}rem` : 'auto'};
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
                    max-height: 25rem;
                    height: ${props => props.$imagesHeight ? `${props.$imagesHeight * .8}rem` : 'auto'};
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