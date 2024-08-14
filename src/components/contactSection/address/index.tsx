import { faMapLocationDot } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import styled from "styled-components"
import location from "@assets/imgs/location.jpg"
import mapImage from "@assets/imgs/mapAddress.jpg"
import { address, googleMapsLink } from "@styles/variables"
import { theme } from "@styles/theme"

export const Address = () => {
    return (
        <Container id="address">
            <h2 className="title">Como chegar ao consultório</h2>
            <div className="address">
                <FontAwesomeIcon icon={faMapLocationDot} className="icon" />
                <p className="text">{address}</p>
            </div>
            <div className="location">
                <div className="imageContainer">
                <img src={location} alt="Consultório" className="clinicImage" />
                </div>
                <div className="map">
                    <a className="seeLocation" href={googleMapsLink} target="_blank" >
                        <h3 className="message">
                            Clique e veja o endereço no Google Maps
                        </h3>
                    </a>
                    <img src={mapImage} alt="Imagem do mapa" className="mapImage" />
                </div>
            </div>
        </Container>
    )
}

const Container = styled.section`
    max-width: 144rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 2rem;

    .title {
        font-size: 4rem;
        font-weight: 400;
        color: ${theme.textColor};
    }

    .address {
        display: flex;
        align-items: center;
        gap: 1rem;
        font-size: 2rem;
        margin-bottom: 1.5rem;
        
        .icon {
            font-size: 2.4rem;
            color: ${theme.tertiaryColor};
        }
    }

    .location {
        display: flex;
        gap: 2rem;
        width: 100%;
        flex-wrap: wrap;
        max-height: 50rem;

        .imageContainer {
            flex: 1;
            
            .clinicImage {
                height: 100%;
                width: 100%;
                object-fit: cover;
                border-radius: 1rem;
                filter: drop-shadow(.5rem .5rem .5rem ${theme.tertiaryColor});
            }
        }
        
        .map {
            height: 100%;
            width: 100%;
            flex: 1;
            background-color: black;
            border-radius: 1rem;
            overflow: hidden;
            position: relative;
            filter: drop-shadow(.5rem .5rem .5rem ${theme.tertiaryColor});

            .seeLocation {
                position: absolute;
                width: 100%;
                padding: 0 2rem;
                display: flex;
                height: 100%;
                background-color: rgba(0,0,0,.6);
                opacity: 0;
                transition: .3s;
                cursor: pointer;
                align-items: center;
                justify-content: center;
                
                .message {
                    color: ${theme.secondaryTextColor};
                    font-size: 2.4rem;
                    text-align: center;
                    letter-spacing: .1rem;
                }

                &:hover {
                    opacity: 1;
                }
            }
            
            .mapImage {
                width: 100%;
                height: 100%;
                object-fit: cover;
                transition: .3s;
                cursor: pointer;

                &:hover {
                    opacity: .6;
                }
            }
        }
    }
`