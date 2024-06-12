import styled from "styled-components"
import data from "@json/index.json"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons"
import { theme } from "@styles/theme"
import { Swiper, SwiperSlide } from "swiper/react"
import { useEffect, useState } from "react"

import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export const Depositions = () => {
    const [slidesPerView, setSlidesPerView] = useState<number>(2)

    useEffect(() => {
        const handleResize = () => {
            const smalDevicesScreen = window.innerWidth < 1200;
            const mobileDevicesScreen = window.innerWidth < 768
            if (mobileDevicesScreen) {
                setSlidesPerView(1)
            } else if (smalDevicesScreen) {
                setSlidesPerView(2)
            } else {
                setSlidesPerView(3)
            }
        };
        handleResize();

        window.addEventListener("resize", handleResize)
        return () => { window.removeEventListener("resize", handleResize) }
    }, [])

    return (
        <Container>
            <h2 className="title">Depoimentos de pacientes</h2>
            <div className="content">
                <div className="depositions">
                    <Swiper
                        spaceBetween={50}
                        slidesPerView={slidesPerView}
                        loop={true}
                        className="swiper"
                        navigation
                        modules={[Pagination, Navigation, Autoplay]}
                        pagination={{
                            dynamicBullets: true, clickable: true
                        }}
                        autoplay={{
                            delay: 5000,
                            disableOnInteraction: false
                        }}
                    >
                        {data.depositions && data.depositions.map(patient =>
                            <SwiperSlide className="slide" key={patient.patientName}>
                                <FontAwesomeIcon icon={faQuoteLeft} className="icon" />
                                <p className="deposition">
                                    "{patient.deposition}"
                                </p>
                                <p className="patientName">{patient.patientName}</p>
                            </SwiperSlide>
                        )
                        }
                    </Swiper>
                </div>
            </div>
        </Container>
    )
}

const Container = styled.div`
    margin-bottom: 5rem;
    display: flex;
    flex-direction: column;
    align-items: center;

    .title {
        width: 100%;
        text-align: center;
        font-size: 4rem;
        font-weight: 400;
        background-color: ${theme.primaryColor};
        padding: 2rem 0;
    }

    .content {
        display: flex;
        justify-content: center;
        max-width: 144rem;
        width: 100%;
        
        .depositions {
            width: 100%;
            padding: 1rem 0;
            
            .icon {
                font-size: 5rem;
                color: ${theme.secondaryColor};
            }

            .swiper {
                max-width: 95%;
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
        
                .swiper-pagination-bullet {
                    background: ${theme.secondaryColor};
                }

                .slide {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    margin-bottom: 3rem;
                    max-width: 100%;
                    cursor: default;
                    -webkit-user-select: none; /* Safari */
                    -moz-user-select: none; /* Firefox */
                    -ms-user-select: none; /* Internet Explorer/Edge */
                    user-select: none;
                    margin: auto;
                    padding: 0 1rem;
                    
                    .deposition {
                        font-size: 2rem;
                        text-align: center;
                        padding: 1rem;
                        font-weight: 300;
                        max-width: 100%;
                    }
            
                    .patientName {
                        font-weight: 500;
                        color: ${theme.secondaryColor};
                        font-size: 2.4rem;
                        letter-spacing: .2rem;
                        text-transform: uppercase;
                    }
                }
            }

        }
    }


    @media (max-width: 425px) {
        margin-bottom: 1rem;
    
        .title {
            font-size: 3rem;
        }
    
        .depositions {
            padding: 1rem;
    
            .icon {
                font-size: 4rem;
            }
    
            .deposition {
                font-weight: 400;
            }
        }
    }
`