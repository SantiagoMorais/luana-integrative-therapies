import { useContext, useEffect, useState } from "react"
import styled from "styled-components"

import { Swiper, SwiperSlide } from "swiper/react"
import { Pagination, Navigation, Autoplay } from "swiper/modules"
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { fontSize, fontWeight, theme } from "@styles/theme";
import { CarouselContext } from "@contexts/caroulselContext";

export interface ICarouselInfo {
    id: string,
    content: string,
    description?: string,
}

export interface ICarouselProps {
    info: ICarouselInfo[],
    slidesNumber: number,
    imagesHeightInRem?: number,
    titleColor?: string,
}

export const EquilibriumCaroulsel: React.FC<ICarouselProps> = ({ info, slidesNumber, imagesHeightInRem }) => {
    const [slidesPerView, setSlidesPerView] = useState<number>(2);
    const { setCurrentTopicId } = useContext(CarouselContext);

    console.log(info);
    

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
        <Container $imagesHeight={imagesHeightInRem}>
            <Swiper
                modules={[Pagination, Navigation, Autoplay]}
                loop={true}
                className="swiper"
                spaceBetween={20}
                slidesPerView={slidesPerView}
                navigation
                pagination={{
                    type: 'bullets',
                    clickable: true,
                }}
                autoplay={{
                    disableOnInteraction: false,
                }}
            >
                {info.map(item =>
                    <SwiperSlide key={item.id} className="slide">
                        <img
                            src={item.content}
                            alt="slideImage"
                            className="slideImage"
                            onClick={() => setCurrentTopicId(item.id)}
                        />
                        <h3 className="itemDescription">
                            {item.description}
                        </h3>
                    </SwiperSlide>
                )}
            </Swiper>
        </Container>
    )
}

const Container = styled.div<{ $imagesHeight: number | undefined }>`
    display: flex;
    align-items: center;
    gap: 1rem;
    width: 100%;

    .swiper {
        max-width: 100%;

        .swiper-button-next, .swiper-button-prev {
            color: ${theme.tertiaryColor};
            transition: .3s;
            opacity: .6;
            /* filter: drop-shadow(0 0 .2rem ${theme.textColor}); */
            background-color: ${theme.secondaryTextColor};
            border: solid .2rem ${theme.tertiaryColor};
            width: 6rem;
            height: 6rem;
            border-radius: 50%;

            &:hover {
                opacity: 1;
                scale: 1.1;
            }
        }

        .swiper-button-next {
            right: 1rem;
            position: absolute;
            transform: translateY(-50%);
        }
        
        .swiper-button-prev {
            left: 1rem;
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

            .slideImage {
                width: 100%;
                min-width: 10rem;
                object-fit: cover;
                border-radius: 1rem;
                border: .2rem solid ${theme.tertiaryColor};
                height: ${props => props.$imagesHeight ? `${props.$imagesHeight}rem` : 'auto'};
                cursor: pointer;
                transition: .3s;

                &:hover {
                    opacity: .7;
                }
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
                color: ${theme.textColor}
            }
        }

        .swiper-pagination {
            font-size: ${fontSize.basicSize};
            color: ${theme.tertiaryColor};
            bottom: 0;
        }
    }

    @media (max-width: 768px) {
        .swiper {
            .swiper-button-next, .swiper-button-prev {
                scale: .8;
                                
                &:hover {
                    scale: 1;
                }
            }

            .swiper-button-next {
                right: 0;
            }

            .swiper-button-prev {
                left: 0;
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