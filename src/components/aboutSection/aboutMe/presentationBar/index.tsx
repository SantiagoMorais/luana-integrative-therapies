import backgroundImage from "@assets/imgs/aboutMeBackground.jpg";
import luanaImageWithoutBG from "@assets/imgs/luanaImageWithoutBg.png";
import luanaImageWithoutBG2 from "@assets/imgs/luanaImageWithoutBG-2.png";
import luanaImageWithoutBG3 from "@assets/imgs/luanaImageWithoutBG-3.png";
import luanaInstagramBackground from "@assets/imgs/luana-instagram.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { instagramLink, whatsappLink } from "@utils/variables";
import { faInstagram, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import styled from "styled-components";
import { fontSize, fontWeight, theme } from "@styles/theme";

export const PresentationBar = () => {
   return (
      <Container>
         <img
            className="backgroundImage"
            src={backgroundImage}
            alt="Imagem de fundo azul"
         />
         <div className="content">
            <h3 className="subtitle">
               Gostaria de conhecer um pouco mais sobre o meu trabalho?
            </h3>
            <div className="info instagram">
               <h3 className="message">
                  Me siga no instagram para receber todas as novidades!
               </h3>
               <button className="button">
                  <a href={instagramLink} className="link" target="_blank">
                     <FontAwesomeIcon icon={faInstagram} className="icon" />
                     <p className="buttonText">Instagram</p>
                  </a>
               </button>
            </div>
            <div className="imageContainer">
               <span className="lineEffect top"></span>
               <img
                  className="backgroundImageInstagram"
                  src={luanaInstagramBackground}
                  alt="background com o instagram da Dra. Luana"
               />

               <img
                  src={luanaImageWithoutBG2}
                  alt="Foto luana no consultório"
                  className="backgroundPhoto right"
               />
               <img
                  src={luanaImageWithoutBG}
                  alt="Foto luana no consultório"
                  className="aboutImage"
               />
               <img
                  src={luanaImageWithoutBG3}
                  alt="Foto luana no consultório"
                  className="backgroundPhoto left"
               />
               <span className="lineEffect bottom"></span>
            </div>
            <div className="info whatsapp">
               <h3 className="message">
                  Agende agora a sua consulta comigo, via Whatsapp.
               </h3>
               <button className="button">
                  <a href={whatsappLink} className="link" target="_blank">
                     <FontAwesomeIcon icon={faWhatsapp} className="icon" />
                     <p className="buttonText">Whatsapp</p>
                  </a>
               </button>
            </div>
         </div>
      </Container>
   );
};

const Container = styled.div`
   position: relative;
   width: 100dvw;
   overflow: hidden;
   box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.6);

   .backgroundImage {
      position: absolute;
      top: 0;
      left: 0;
      object-fit: cover;
      opacity: 0.8;
      height: 100%;
      width: 100%;
      object-position: center;
   }

   .backgroundImageInstagram {
      display: none;
   }

   .content {
      position: relative;
      z-index: 10;
      min-width: 100dvw;

      .subtitle {
         width: fit-content;
         position: absolute;
         top: 5%;
         right: 0;
         left: 0;
         margin: auto;
         font-size: 2.6dvw;
         z-index: 2;
         font-weight: ${fontWeight.semiBold};
         text-align: center;
         color: ${theme.textColor};
         opacity: 0.8;
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
            opacity: 0.8;
         }

         .button {
            border: none;
            padding: 3% 6%;
            width: fit-content;
            align-self: center;
            border-radius: 1rem;
            background-color: ${theme.secondaryColor};
            font-size: 1.6dvw;
            letter-spacing: 0.1dvw;
            font-weight: ${fontWeight.semiBold};
            cursor: pointer;
            transition: scale 0.3s, border-color 0.3s;
            border: 0.3dvw solid transparent;

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

         .aboutImage {
            width: 100%;
            z-index: 2;
            filter: drop-shadow(0.5rem 0.5rem 0.5rem white);
         }

         .backgroundPhoto {
            position: absolute;
            z-index: 0;
            margin: auto;
            height: 100%;
            scale: 2.5;
            top: 50%;
            opacity: 0.3;
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
            opacity: 0.6;
            z-index: 1;
         }

         .lineEffect.top {
            top: 7%;
         }

         .lineEffect.bottom {
            bottom: 7%;
         }
      }
   }

   @media (max-width: 768px) {
      .backgroundImageInstagram {
         display: block;
         position: absolute;
         top: 0;
         left: 0;
         opacity: 0.3;
         width: 110%;
         height: 110%;
         object-fit: cover;
         rotate: -8deg;
         transform: translateX(0);
      }

      .content {
         display: flex;
         flex-direction: column;
         gap: 1rem;
         height: auto;
         margin-bottom: 2rem;

         .subtitle {
            position: static;
            font-size: ${fontSize.extraLargeSize};
            text-align: center;
            opacity: 1;
            order: 2;
            padding: 0 4rem;

         }

         .info {
            position: static;
            width: 100%;
            transform: translateY(0%);
            background-color: rgba(255,255,255, .4);
            padding: 1rem 4rem;

            .message {
               font-size: 2.6rem;
            }

            .button {
               padding: 1rem 2rem;
               font-size: ${fontSize.smallSize};
               height: fit-content;

               .link {
                  gap: 0.5rem;
               }
            }

            &.whatsapp {
               order: 3;
            }

            &.instagram {
               order: 4;
            }
         }

         .imageContainer {
            padding: 4rem 4rem 0;
            order: 1;
            position: static;
            height: max-content;
            overflow-x: hidden;
            width: 100%;

            .backgroundPhoto.left,
            .aboutImage {
               display: none;
            }

            .backgroundPhoto.right {
               opacity: 1;
               position: static;
               max-width: 100%;
               object-fit: cover;
               height: auto;
               transform: scaleX(1);
               scale: 1;
               object-position: top;
               mask-image: linear-gradient(
                  to bottom,
                  rgba(0, 0, 0, 1) 80%,
                  rgba(0, 0, 0, 0) 100%
               );
               -webkit-mask-image: linear-gradient(
                  to bottom,
                  rgba(0, 0, 0, 1) 80%,
                  rgba(0, 0, 0, 0) 100%
               );
               filter: drop-shadow(0 0 0.5rem ${theme.tertiaryColor});
            }

            .lineEffect {
            }

            .lineEffect.top {
               bottom: auto;
               top: 1rem;
               height: 0.2rem;
            }

            .lineEffect.bottom {
               bottom: 1rem;
               top: auto;
               height: 0.2rem;
            }
         }
      }
   }

   @media (max-width: 425px) {
      .content {
         .subtitle {
            font-size: ${fontSize.mediumSize};
         }

         .info {
            .message {
               font-size: ${fontSize.basicSize};
            }

            .button {
               padding: 0.5rem 2rem;
               font-size: 1.8rem;
            }
         }
      }
   }
`;
