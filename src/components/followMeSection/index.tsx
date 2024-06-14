import styled from "styled-components"
import followMeImage from "@assets/imgs/professionalImage.jpg"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faInstagram } from "@fortawesome/free-brands-svg-icons"
import { faCalendarDays } from "@fortawesome/free-solid-svg-icons"
import { theme } from "@styles/theme"
import { instagramLink, whatsappLink } from "@styles/variables"

export const FollowMeSection = () => {
    return (
        <Container>
            <div className="content">
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
                        Agende agora sua consulta
                    </h3>
                    <p className="message">
                        Precisa de orientações ou quer agendar uma consulta?

                        Entre em contato: (99) 99999-9999/ (99) 99999-9999 ou faça sua reserva aqui mesmo.
                    </p>
                    <button className="button">
                        <a href={whatsappLink} className="link" target="_blank" >
                            <FontAwesomeIcon icon={faCalendarDays} className="icon" />
                            <p className="buttonText">Agende sua consulta</p>
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
    background-color: ${theme.primaryColor};

    .content {
        width: 100%;
        max-width: 144rem;
        display: flex;
        justify-content: center;
        padding: 0 2rem;
        gap: 2rem;
        align-items: center;

        .imageContainer {
            max-width: 40rem;
            height: 50rem;
            overflow: hidden; 
            flex: 2;
            
            .instragramImage {
                width: 100%;
                height: 100%;
                object-fit: cover;
                object-position: bottom center;

                mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
                -webkit-mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
            }
        }

        .info {
            width: 100%;
            flex: 1;
            padding: 2rem 0;
            display: flex;
            flex-direction: column;
            gap: 1rem;

            .title {
                font-size: 3rem;
                color: ${theme.textColor};
                font-weight: 600;
            }

            .message {
                font-size: 2.1rem;
            }

            .button {
                border: none;
                padding: 1rem 2rem;
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
        .content {
            flex-direction: column;
            padding: 0 0 2rem;
            gap: 1rem;
    
            .imageContainer {
                max-width: 100%;
                width: 100%;
                overflow: hidden;
                order: 1;
                flex: auto;
                height: 50rem;

                .instragramImage {
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