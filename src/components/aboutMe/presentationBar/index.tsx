import backgroundImage from "@assets/imgs/aboutMeBackground.jpg"
import luanaImageWithoutBG from "@assets/imgs/luanaImageWithoutBg.png"
import luanaImageWithoutBG2 from "@assets/imgs/luanaImageWithoutBG-2.png"
import luanaImageWithoutBG3 from "@assets/imgs/luanaImageWithoutBG-3.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { instagramLink, whatsappLink } from "@styles/variables"
import { faInstagram, faWhatsapp } from "@fortawesome/free-brands-svg-icons"
import styled from "styled-components"
import { theme } from "@styles/theme"

export const PresentationBar = () => {
    return (
        <Container>
            <h3 className="subtitle">
                Gostaria de conhecer um pouco mais sobre o meu trabalho?
            </h3>
            <div className="info instagram">
                <h3 className="message">
                    Me siga no instagram para receber todas as novidades!
                </h3>
                <button className="button">
                    <a href={instagramLink} className="link" target="_blank" >
                        <FontAwesomeIcon icon={faInstagram} className="icon" />
                        <p className="buttonText">Instagram</p>
                    </a>
                </button>
            </div>
            <div className="imageContainer">
                <span className="lineEffect top"></span>
                <img className="backgroundImage" src={backgroundImage} alt="Imagem de fundo azul" />
                <img src={luanaImageWithoutBG2} alt="Foto luana no consultório" className="backgroundPhoto right" />
                <img src={luanaImageWithoutBG} alt="Foto luana no consultório" className="aboutImage" />
                <img src={luanaImageWithoutBG3} alt="Foto luana no consultório" className="backgroundPhoto left" />
                <span className="lineEffect bottom"></span>
            </div>
            <div className="info whatsapp">
                <h3 className="message">
                    Agende agora a sua consulta comigo, via Whatsapp.
                </h3>
                <button className="button">
                    <a href={whatsappLink} className="link" target="_blank" >
                        <FontAwesomeIcon icon={faWhatsapp} className="icon" />
                        <p className="buttonText">Whatsapp</p>
                    </a>
                </button>
            </div>
        </Container>
    )
}

const Container = styled.div`
    position: relative;
    
    .subtitle {
        width: fit-content;
        position: absolute;
        top: 5%;
        right: 0;
        left: 0;
        margin: auto;
        font-size: 2.6dvw;
        z-index: 2;
        font-weight: 500;
        text-align: center;
        color: ${theme.textColor};
        opacity: .8;
    }

    .info {
        position: absolute;
        z-index: 3;
        width: 15%;
        display: flex;
        flex-direction: column;
        gap: 1rem;
        top: 50%;
        transform: translateY(-50%);

        .message {
            font-size: 2.1dvw;
            color: ${theme.textColor};
            font-weight: 600;
            text-align: center;
            opacity: .8;
        }

        .button {
            border: none;
            padding: 3% 6%;
            width: fit-content;
            align-self: center;
            border-radius: 1rem;
            background-color: ${theme.secondaryColor};
            font-size: 1.6dvw;
            letter-spacing: .1dvw;
            font-weight: 500;
            cursor: pointer;
            transition: scale .3s, border-color .3s;
            border: .3dvw solid transparent;
            
            .link {
                color: ${theme.secondaryTextColor};
                display: flex;
                align-items: center;
                justify-content: center;
                gap: 4%;

                .buttonText {
                    min-width: fit-content;
                }
            }

            &:hover {
                scale: 1.15;
                border-color: ${theme.secondaryTextColor};
            }
        }

        &.whatsapp {
            right: 25dvw;
        }

        &.instagram {
            left: 25dvw;
        }
    }

    .imageContainer {
        width: 100dvw;
        position: relative;
        overflow: hidden;
        display: flex;
        align-content: center;
        overflow: hidden;
        
        .backgroundImage {
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            object-fit: cover;
            opacity: .6;
            height: 100%;
            width: 100%;
            object-position: center;
            box-shadow: .5rem .5rem 1rem rgba(0,0,0,.6);
        }
        
        .aboutImage {
            width: 100%;
            z-index: 2;
            filter: drop-shadow(.5rem .5rem .5rem white);

        }

        .backgroundPhoto {
            position: absolute;
            z-index: 0;
            margin: auto;
            height: 100%;
            scale: 2.5;
            top: 50%;
            opacity: .3;
        }

        .backgroundPhoto.left {
            left: 10%;
            transform: scaleX(-1);
        }

        .backgroundPhoto.right {
            right: 12%;
        }
        
        .lineEffect {
            width: 100%;
            position: absolute;
            left: 0;
            height: 1%;
            background-color: white;
            opacity: .6;
            z-index: 1;
        }

        .lineEffect.top {
            top: 7%;
        }
            
        .lineEffect.bottom {
            bottom: 7%;
        }
    }

    @media (max-width: 768) {
        
    }
`