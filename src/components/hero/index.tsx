import styled, { keyframes } from "styled-components"
import heroImage from "@assets/imgs/heroImageLargeScreenDevices.jpg"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowDown } from "@fortawesome/free-solid-svg-icons"
import { theme } from "@styles/theme"

export const Hero = () => {
    return (
        <Container>
            <div className="slogan">
                <div className="background"></div>
                <h2 className="title">HARMONIZANDO ENERGIA E SAÚDE</h2>
                <h3 className="subtitle">
                    Descubra uma jornada de cura e harmonia através de terapias integrativas.
                </h3>
            </div>
            <FontAwesomeIcon className="icon" icon={faArrowDown} data-testid="fontAwesomeIcon" />
        </Container>
    )
}

const animation = keyframes`
    0% {
        transform: translateY(0);
        opacity: .4;
    };
    50% {
        transform: translateY(1rem);
        opacity: 1;
    };
    100% {
        transform: translateY(0);
        opacity: .4;
    }
`

const Container = styled.div`
    flex-grow: 1;
    background: ${theme.secondaryTextColor} url(${heroImage}) no-repeat 15dvw 10%;
    background-size: cover;
    position: relative;
    border: solid ${theme.secondaryTextColor};
    border-width: .3rem 0;

    .slogan {
        position: absolute;
        width: 35%;
        left: 8%;
        top: 12%;
        color: ${theme.textColor};
        z-index: 1;
        display: flex;
        flex-direction: column;
        gap: 1rem;

        .title {
            font-size: 9rem;
            font-weight: 600;
            line-height: 90%;
            color: ${theme.secondaryTextColor};
            filter: drop-shadow(.2rem .2rem .2rem ${theme.shadowColor});
            text-transform: uppercase;
        }

        .subtitle {
            font-size: 5rem;
            font-weight: 400;
            color: ${theme.secondaryTextColor};
            filter: drop-shadow(.1rem .1rem .2rem ${theme.textColor});
        }
    }

    .icon {
        font-size: 5rem;
        position: absolute;
        bottom: 3rem;
        right: 0;
        left: 0;
        margin: auto;
        animation: ${animation} 2s infinite;
        filter: drop-shadow(0 0 10px ${theme.secondaryTextColor});
        z-index: 2;
    }

    &::after, &::before {
        content: "";
        position: absolute;
        top: 0;
        bottom: 0;
        pointer-events: none;
    }

    &::after {
            left: 14.9dvw;
            width: 20dvw;
            background: linear-gradient(to left, rgba(255, 255, 255, 0), ${theme.secondaryTextColor});
    }

    &::before {
            left: 0;
            width: 15dvw;
            background: ${theme.secondaryTextColor};
        }

    @media (max-width: 1200px) {
        background-position: left 10%;

        .slogan {
            .title {
                font-size: 6rem;
            }

            .subtitle {
                font-size: 4rem;
            }
        }
    }

    @media (max-width: 900px) {
        background-position: center 10%;

        .slogan {
            width: 70%;
            left: 0;
            right: 0;
            margin: auto;
            text-align: center;
            bottom: 6rem;
            top: auto;
            gap: 0;

            .title {
                font-size: 5rem;
            }

            .subtitle {
                font-size: 3.5rem;
            }
        }

        .icon {
            bottom: 1.5rem;
        }

        &::after, &::before {
            left: 0;
            right: 0;
            top: auto;
            width: 100%;
        }

        &::before {
            bottom: 0;
            height: 8rem;
        }

        &::after {
            bottom: 7.9rem;
            height: 10rem;
            background: linear-gradient(to bottom, rgba(255, 255, 255, 0), ${theme.secondaryTextColor});
        }
    }

    @media (max-width: 768px) {
        .slogan {
            .title {
                font-size: 4rem;
            }

            .subtitle {
                font-size: 2.6rem;
            }
        }
    
        .icon {
            font-size: 4rem;
            position: absolute;
            z-index: 2;
        }
    }

    @media (max-width: 425px) {
        .slogan {
            width: 80%;
            
            .title {
                font-size: 3.2rem;
            }

            .subtitle {
                font-size: 2.1rem;
            }
        }
    }
`