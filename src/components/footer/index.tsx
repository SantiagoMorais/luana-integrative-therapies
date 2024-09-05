import { faInstagram, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faAt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fontSize, fontWeight, theme } from "@styles/theme";
import { googleMapsLink, instagramLink, whatsappLink } from "@utils/variables";
import styled from "styled-components";
import { navigationLinks } from "@json/index.json";
import { Link, useLocation } from "react-router-dom";

export const Footer = () => {
   const location = useLocation();

   const locationPath = location.pathname.slice(1);
   const locationName = locationPath.split("/")[0];

   return (
      <Container>
         <div className="content">
            <div className="nameTitle">
               <p>
                  <span className="firstLetter">L</span>uana
               </p>
               <p>Vasconcellos</p>
               <p>Alvarenga</p>
            </div>
            <div className="socialMedia">
               <p className="about">
                  A Dra. Luana Vasconcellos, Cirurgiã Dentista e Terapeuta
                  Integrativa, dedica-se ao bem-estar integral de seus pacientes
                  com um enfoque preventivo e holístico. Seu atendimento
                  cuidadoso e personalizado visa promover a saúde em todas as
                  suas dimensões, prevenindo doenças e aliviando dores. No
                  consultório da Dra. Luana, cada detalhe é pensado para
                  proporcionar um ambiente acolhedor e de confiança, garantindo
                  tratamentos realizados com carinho e excelência, focados em
                  melhorar a qualidade de vida e o equilíbrio do corpo.
               </p>
               <h3 className="title">Me encontre nas minhas mídias sociais</h3>
               <ul className="social">
                  <li>
                     <a
                        href={whatsappLink}
                        target="_blank"
                        data-testid="whatsapp"
                     >
                        <FontAwesomeIcon icon={faWhatsapp} />
                     </a>
                  </li>
                  <li>
                     <a href="" target="_blank" data-testid="email">
                        <FontAwesomeIcon icon={faAt} />
                     </a>
                  </li>
                  <li>
                     <a
                        href={instagramLink}
                        target="_blank"
                        data-testid="instagram"
                     >
                        <FontAwesomeIcon icon={faInstagram} />
                     </a>
                  </li>
               </ul>
            </div>
            <ul className="navigation">
               {navigationLinks
                  .filter((nav) => nav.link)
                  .map((item) => (
                     <Link
                        key={item.name}
                        to={`/${item.link}`}
                        className={`section ${
                           locationName === item.link && "selected"
                        }`}
                     >
                        {item.name}
                     </Link>
                  ))}
               {navigationLinks
                  .filter((nav) => nav.link === null)
                  .map((link) => (
                        <a
                           className="section"
                           href={googleMapsLink}
                           target="_blank"
                        >
                           {link.name}
                        </a>
                  ))}
            </ul>
         </div>
      </Container>
   );
};

const Container = styled.footer`
   padding: 3rem;
   background-color: ${theme.primaryColor};
   font-size: ${fontSize.smallSize};
   display: flex;
   justify-content: center;
   flex-shrink: 0;
   margin-top: auto;

   .content {
      display: flex;
      text-align: center;
      gap: 2rem;
      width: 100%;
      max-width: 144rem;
      align-items: center;

      .nameTitle {
         font-size: 5rem;
         font-family: ${theme.fontFamily};
         font-weight: ${fontWeight.semiBold};
         line-height: 0.8;
         text-align: left;
         width: min-content;
         flex: 1;

         p {
            font-family: ${theme.fontFamily};

            &:nth-child(2) {
               padding-left: 4rem;
            }

            &:nth-child(3) {
               padding-left: 8rem;
            }

            .firstLetter {
               font-size: 8rem;
               font-family: ${theme.fontFamily};
            }
         }
      }

      .socialMedia {
         display: flex;
         flex-direction: column;
         align-items: center;
         gap: 1rem;
         flex: 2;

         .about {
            font-size: 1.6rem;
            text-align: justify;
         }

         .title {
            font-weight: 400;
         }

         .social {
            display: flex;
            gap: 1.5rem;
            font-size: ${fontSize.mediumSize};
            cursor: pointer;

            li {
               a {
                  color: ${theme.textColor};
                  transition: 0.3s;

                  &:hover {
                     opacity: 0.6;
                  }
               }
            }
         }
      }

      .navigation {
         flex: 1;
         display: flex;
         flex-direction: column;
         align-self: baseline;
         align-items: end;
         gap: 0.5rem;

         .section {
            min-width: fit-content;
            font-size: 1.6rem;
            font-weight: 700;
            transition: 0.3s;
            position: relative;
            color: ${theme.textColor};
            text-transform: capitalize;
            padding-bottom: 0.2rem;

            &::first-letter {
               text-transform: capitalize;
            }

            &:hover {
               opacity: 0.6;
            }

            &::after {
               content: "";
               position: absolute;
               bottom: 0;
               left: -5%;
               width: 105%;
               height: 0.1rem;
               background: ${theme.textColor};
               transform: scaleX(0);
               transform-origin: left;
               transition: transform 0.5s;
            }

            &:hover::after {
               transform: scaleX(1);
            }

            &:not(:hover)::after {
               transform: scaleX(0);
               transform-origin: right;
            }

            &.selected::after {
               transform: scaleX(1);
            }
         }
      }
   }

   @media (max-width: 768px) {
      .content {
         flex-direction: column;

         .nameTitle {
            font-size: ${fontSize.extraLargeSize};
            display: flex;
            align-items: baseline;
            gap: 1rem;
            flex-wrap: wrap;
            width: 100%;
            justify-content: center;

            p {
               max-width: fit-content;

               &:nth-child(2) {
                  padding-left: 0;
               }

               &:nth-child(3) {
                  padding-left: 0;
               }

               .firstLetter {
                  font-size: 8rem;
                  font-family: ${theme.fontFamily};
               }
            }
         }

         .socialMedia {
            .about {
               max-width: 100%;
            }
         }

         .navigation {
            width: 100%;
            justify-content: center;
            flex-wrap: wrap;
            flex-direction: row;
            gap: 2rem;

            .section {
               padding: 0 0 0.2rem;
            }
         }
      }
   }
`;
