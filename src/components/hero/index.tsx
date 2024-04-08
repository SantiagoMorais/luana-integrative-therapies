import styled, { keyframes } from "styled-components"
import heroImage from "@assets/pexels-andrea-piacquadio-3756679.jpg"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowDown } from "@fortawesome/free-solid-svg-icons"

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
        opacity: .6;
    };
    50% {
        transform: translateY(1rem);
        opacity: 1;
    };
    100% {
        transform: translateY(0);
        opacity: .6;
    }
`

const Container = styled.div`
    flex-grow: 1;
    background: url(${heroImage}) no-repeat top right;
    background-size: cover;
    position: relative;

    .slogan {
        font-size: 3vw;
        position: absolute;
        width: 35%;
        left: 10%;
        top: 50%;
        transform: translateY(-50%);
        font-weight: 400;

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
    }
`