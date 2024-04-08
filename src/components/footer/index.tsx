import { faInstagram, faWhatsapp } from "@fortawesome/free-brands-svg-icons"
import { faAt } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { theme } from "@styles/theme"
import styled from "styled-components"

export const Footer = () => {
    return (
        <Container>
            <h1 className="nameTitle">
                <span className="firstLetter">L</span>uana Vasconcellos Alvarenga
            </h1>
            <div className="socialMedia">
                <h3 className="title">Me encontre nas minhas mídias sociais</h3>
                <ul className="social">
                    <li><a href="https://api.whatsapp.com/send?phone=+5531991571662&text=Hello%2C%20how%20are%20you%3F" target="_blank" data-testid="whatsapp"><FontAwesomeIcon icon={faWhatsapp} /></a></li>
                    <li><a href="" target="_blank" data-testid="email"><FontAwesomeIcon icon={faAt} /></a></li>
                    <li><a href="https://www.instagram.com/dra.luanaalvarenga/" target="_blank" data-testid="instagram"><FontAwesomeIcon icon={faInstagram} /></a></li>
                </ul>
            </div>
        </Container>
    )
}

const Container = styled.footer`
    display: flex;
    justify-content: space-around;
    padding: 3rem;
    background-color: ${theme.primaryColor};
    font-size: 2rem;
    align-items: center;

    .nameTitle {
        font-size: 3rem;
        font-family: ${theme.fontFamily};
        font-weight: 500;
    
        .firstLetter {
            font-size: 6rem;
            font-family: ${theme.fontFamily};
        }
    }

    .socialMedia {
        display: flex;
        flex-direction: column;
        align-items: center;

        .title {
            font-weight: 400;
        }
    
        .social {
            display: flex;
            gap: 1.5rem;
            font-size: 3rem;
            cursor: pointer;
            
            li {
                a {
                    color: ${theme.textColor};
                    transition: .3s;

                    &:hover {
                        opacity: .6;
                    };
                }
            }
        }
    }
`