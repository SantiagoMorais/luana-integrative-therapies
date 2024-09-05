import { faMapLocationDot } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";
import location from "@assets/imgs/location.jpg";
import mapImage from "@assets/imgs/mapAddress.png";
import { address, googleMapsLink } from "@utils/variables";
import { fontSize, fontWeight, theme } from "@styles/theme";

export const Address = () => {
   return (
      <Container>
         <h2 className="title">Como chegar ao consultório</h2>
         <div className="address">
            <a href={googleMapsLink} target="_blank" className="link">
               <FontAwesomeIcon icon={faMapLocationDot} className="icon" />
               {address}
            </a>
            <p className="text">Clique no mapa para acessar o Google Maps</p>
         </div>
         <div className="location">
            <div className="imageContainer">
               <img src={location} alt="Consultório" className="clinicImage" />
            </div>
            <div className="mapContainer">
               <a className="seeLocation" href={googleMapsLink} target="_blank">
                  <h3 className="message">
                     Clique e veja o endereço no Google Maps
                  </h3>
               </a>
               <img src={mapImage} alt="Imagem do mapa" className="mapImage" />
            </div>
         </div>
      </Container>
   );
};

const Container = styled.section`
   width: 100%;
   display: flex;
   flex-direction: column;
   align-items: center;
   padding: 0 2rem;
   gap: 2rem;
   max-width: 144rem;

   .address {
      display: flex;
      gap: 1rem;
      flex-direction: column;
      align-items: center;

      .link,
      .text {
         text-align: center;
         font-size: ${fontSize.basicSize};
         color: ${theme.textColor};
      }

      .text {
         font-weight: ${fontWeight.semiBold};
      }

      .link {
         font-weight: ${fontWeight.medium};
         justify-content: center;
         flex-wrap: wrap;
         transition: 0.3s;
         display: flex;
         gap: 1rem;
         flex-wrap: wrap;

         &:hover {
            scale: 1.1;
            color: ${theme.tertiaryColor};
         }
      }
   }

   .location {
      display: flex;
      width: 100%;
      flex-wrap: wrap;
      gap: 2rem;

      .imageContainer,
      .mapContainer {
         flex: 1;
         min-width: 25rem;
         border-radius: 1rem;
         overflow: hidden;
         box-shadow: 0.5rem 0.5rem 1rem ${theme.secondaryColor};
         border: solid 0.3rem ${theme.secondaryColor};
      }

      .imageContainer {
         .clinicImage {
            width: 100%;
            object-fit: cover;
            height: 100%;
            object-position: center;
         }
      }

      .mapContainer {
         position: relative;

         .seeLocation {
            position: absolute;
            width: 100%;
            height: 100%;
            background-color: ${theme.textColor};
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 2rem;
            opacity: 0;
            transition: 0.3s;

            .message {
               color: ${theme.secondaryTextColor};
               font-size: clamp(4rem, 5vw, 10rem);
               text-align: center;
            }
         }

         .mapImage {
            width: 100%;
            object-fit: cover;
            height: 100%;
            object-position: center;
         }

         &:hover > .seeLocation {
            opacity: 0.6;
         }
      }
   }

   @media (max-width: 425px) {
      .location {
         .imageContainer,
         .mapContainer {
            min-width: auto;
            flex: auto;
            width: 100%;
         }
      }
   }

   @media (max-width: 320px) {
      .location {
         .mapContainer {
            .seeLocation {
               .message {
                  font-size: clamp(2rem, 5vw, 10rem);
               }
            }
         }
      }
   }
`;
