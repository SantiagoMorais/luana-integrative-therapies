import styled, { keyframes } from "styled-components"
import heroImage from "@assets/pexels-christina-morillo-1181690.jpg"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowDown } from "@fortawesome/free-solid-svg-icons"
import { theme } from "@styles/theme"

export const Hero = () => {
    return (
        <Container>
            <h2 className="slogan">
                <span className="firstLetter">D</span>escubra uma jornada de cura e harmonia através de terapias integrativas.
            </h2>
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
    background: url(${heroImage}) no-repeat top right;
    background-size: cover;
    position: relative;

    .slogan {
        font-size: 4rem;
        position: absolute;
        width: 35%;
        left: 10%;
        top: 25%;
        font-weight: 400;
        color: ${theme.textColor};
        filter: drop-shadow(0 0 10px ${theme.secondaryTextColor});

        .firstLetter {
            font-size: 200%;
            top: -9rem;
            left: -7rem;
            font-weight: 300;
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
    }

    @media (max-width: 1200px) {
        background-position: center;
    
        .slogan {
            width: 50%;
            left: 0;
            right: 0;
            margin: auto;
            text-align: center;
            top: 40%;
        }
    
        .icon {
            font-size: 4rem;
            position: absolute;
        }
    }

    @media (max-width: 900px) {
        .slogan {
            width: 60%;
            font-size: 3.5rem;
        }
    }

    @media (max-width: 425px) {
        .slogan {
            width: 80%;
            font-size: 3rem;
        }
    }
`