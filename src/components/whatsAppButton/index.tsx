import { faWhatsapp } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { theme } from "@styles/theme"
import { whatsappLink } from "@styles/variables"
import styled from "styled-components"

export const WhatsAppButton = () => {
    return (
        <Container>
            <a href={whatsappLink} className="link" target="_blank">
                <FontAwesomeIcon icon={faWhatsapp} className="icon" />
                <p className="text">Fale conosco via WhatsApp</p>
            </a>
        </Container>
    )
}

const Container = styled.button`
    opacity: .6;
    background: #25D366;
    border: none;
    border-radius: 50rem;
    position: fixed;
    bottom: 2rem;
    right: 2rem;
    transition: .3s;
    z-index: 3;

    .link {
        display: flex;
        gap: .5rem;
        padding: .5rem 1rem;
        align-items: center;

        .icon {
            color: ${theme.secondaryTextColor};
            font-size: 2.2rem;
        }
        
        .text {
            color: ${theme.secondaryTextColor};
            font-size: 1.6rem;
            letter-spacing: .1rem;
        }
    }

    &:hover {
        opacity: 1;
        filter: drop-shadow(0 0 1rem #25D366);
    }

    @media (max-width: 768px) {
        border-radius: 50%;;

        .link {
            padding: 0;
            width: 5rem;
            height: 5rem;
            display: flex;
            justify-content: center;

            .icon {
                font-size: 2.8rem;
            }

            .text {
                display: none;
            }
        }
    }
`