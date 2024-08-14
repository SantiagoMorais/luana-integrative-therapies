import styled from "styled-components"
import followMeImage from "@assets/imgs/luanaImageWithoutBG-3.png"
import moonImage from "@assets/imgs/moonPNG.png"
import starsImage from "@assets/imgs/nightSkyPNG.jpg"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faInstagram } from "@fortawesome/free-brands-svg-icons"
import { faCalendarDays } from "@fortawesome/free-solid-svg-icons"
import { theme } from "@styles/theme"
import { instagramLink, whatsappLink } from "@utils/variables"

export const FollowMeSection = () => {
    return (
        <Container>
            <div className="content">
                <div className="moonContainer">
                    <div className="moonImageContainer">
                        <img src={moonImage} alt="imagem lua" className="moonImage" />
                    </div>
                </div>
                <div className="starsContainer">
                    <div className="starsImageContainer">
                        <img src={starsImage} alt="imagem estrelas" className="starsImage" />
                    </div>
                </div>
                <div className="info instagram">
                    <h3 className="title">
                        Gostaria de conhecer um pouco mais sobre o mundo das terapias integrativas?
                    </h3>
                    <p className="message">
                        Me siga no instagram para receber todas as novidades!
                    </p>
                    <button className="button">
                        <a href={instagramLink} className="link" target="_blank" >
                            <FontAwesomeIcon icon={faInstagram} className="icon" />
                            <p className="buttonText">Instagram</p>
                        </a>
                    </button>
                </div>
                <div className="imageContainer">
                    <img src={followMeImage} alt="Siga-me no Instagram" className="instragramImage" />
                </div>
                <div className="info">
                    <h3 className="title">
                        Agende agora sua consulta comigo pelo Whatsapp!
                    </h3>
                    <p className="message">
                        Precisa de orientações ou quer agendar uma consulta?
                        Entre em contato clicando no botão abaixo e faça sua reserva agora mesmo.
                    </p>
                    <button className="button">
                        <a href={whatsappLink} className="link" target="_blank" >
                            <FontAwesomeIcon icon={faCalendarDays} className="icon" />
                            <p className="buttonText">Agendar consulta</p>
                        </a>
                    </button>
                </div>
            </div>
        </Container>
    )
}

const Container = styled.section`
    margin-bottom: 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    background: linear-gradient(90deg, ${theme.tertiaryColor} 0%, ${theme.primaryColor} 100%);

    .content {
        width: 100%;
        max-width: 144rem;
        display: flex;
        justify-content: center;
        padding: 0 2rem;
        gap: 2rem;
        align-items: center;
        position: relative;
        overflow-y: hidden;

        .moonContainer {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            overflow: hidden;
            
            .moonImageContainer {
                position: relative;
                width: 100%;
                height: 100%;
        
                .moonImage {
                    width: 60%;
                    height: 100%;
                    object-fit: cover;
                    object-position: -20rem bottom;
                    opacity: .6;
                    mask-image: radial-gradient(circle, rgba(0, 0, 0, 1) 50%, rgba(0, 0, 0, 0) 100%);
                    -webkit-mask-image: radial-gradient(circle, rgba(0, 0, 0, 1) 50%, rgba(0, 0, 0, 0) 100%);
                }
            }
        }

        .starsContainer {
            position: absolute;
            top: -5rem;
            right: 0;
            width: 70%;
            height: 100%;

            .starsImageContainer {
                .starsImage {
                    right: 0rem;
                    width: 100%;
                    height: auto;
                    object-fit: cover;
                    object-position:  center;
                    opacity: .7;
                    mask-image: radial-gradient(circle, black 10%, transparent 70%);
                    -webkit-mask-image: radial-gradient(circle, black 10%, transparent 70%);
                    transform: scale(-1);
                }
            }
        }
    
        .imageContainer {
            max-width: 40rem;
            flex: 2;
            position: relative;
            
            .instragramImage {
                width: 100%;
                height: 100%;
                scale: 1.3;
                object-fit: cover;
                object-position: center 5rem;
                filter: drop-shadow(0 0 .5rem white);
            }
        }

        .info {
            width: 100%;
            flex: 1;
            padding: 2rem 0;
            display: flex;
            flex-direction: column;
            gap: 1rem;
            z-index: 1;

            .title {
                font-size: 3rem;
                color: ${theme.textColor};
                font-weight: 600;
                text-align: center;
            }

            .message {
                font-size: 2.1rem;
                text-align: center;
            }

            .button {
                border: none;
                padding: .5rem 2rem;
                width: fit-content;
                align-self: center;
                border-radius: 1rem;
                background-color: ${theme.secondaryColor};
                font-size: 2.1rem;
                font-weight: 500;
                cursor: pointer;
                transition: .3s;
                opacity: .8;
                border: .2rem solid transparent;
                
                .link {
                    color: ${theme.secondaryTextColor};
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    gap: 1rem;

                    .buttonText {
                        min-width: fit-content;
                    }
                }

                &:hover {
                    scale: 1.15;
                    opacity: 1;
                    border-color: ${theme.secondaryTextColor};
                }
            }

            &.instagram {
                text-align: end;
            }
        }
    }

    @media (max-width: 768px) {
        background: linear-gradient(0deg, ${theme.primaryColor} 0%, ${theme.tertiaryColor} 100%);

        .content {
            flex-direction: column;
            padding: 0 0 2rem;
            gap: 1rem;

            .moonContainer {
                width: 100%;
                
                .moonImageContainer {
                    .moonImage {
                        opacity: 1;
                        width: 100%;
                        height: 100%;
                        object-fit: cover;
                        object-position: center 50rem;
                    }
                }
            }

            .starsContainer {
                top: -5rem;
                width: 100%;
                height: 100%;

                .starsImageContainer {
                    .starsImage {
                        object-position: top;
                        opacity: 0.6;
                        mask-image: linear-gradient(to top, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0));
                        -webkit-mask-image: linear-gradient(to top, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0));
                    }

                }
            }
    
            .imageContainer {
                max-width: 100%;
                width: 100%;
                overflow: hidden;
                order: 1;
                flex: auto;
                padding: 2rem;

                .instragramImage {
                    scale: 1;
                    object-position: center;
                    mask-image: linear-gradient(to bottom, black, black 90%, transparent 100%);
                    -webkit-mask-image: linear-gradient(to bottom, black, black 90%, transparent 100%);
                }
            }
    
            .info {
                max-width: 100%;
                text-align: center;
                align-items: center;
                padding: 0 2rem;
                order: 2;

                .title {
                    text-align: center;
                }
            }
        }
    }
`