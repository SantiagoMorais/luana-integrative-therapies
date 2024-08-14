import styled from "styled-components"
import { faFaceFrown } from "@fortawesome/free-regular-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { theme } from "@styles/theme"

export const ErrorPage = () => {
    return (
        <Container>
            <FontAwesomeIcon className="icon" icon={faFaceFrown} />
            <h3 className="warningTitle">ERRO 404 - Publicações não encontradas</h3>
            <p className="warningText">Por algum motivo não foi possível encontrar os dados das publicações. Por favor, tente mais tarde ou entre em contato conosco.</p>
        </Container>
    )
}

const Container = styled.div`
    width: 100%;
    padding: 2rem 2rem 4rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    align-items: center;

    .warningTitle {
        color: ${theme.tertiaryColor};
        font-size: 4.6rem;
        text-align: center;
    }
    
    .warningText {
        color: ${theme.textColor};
        font-size: 3rem;
        text-align: center;
        margin-bottom: 1rem;
    }

    .icon {
        width: 30dvw;
        height: 30dvw;
        max-width: 30rem;
        color: ${theme.tertiaryColor};
        opacity: 50%;
    }

    @media (max-width: 420px) {
        .warningTitle {
            font-size: 3rem;
        }

        .warningText {
            font-size: 2.4rem;
        }

        .icon {
            width: 50dvw;
            height: 50dvw;
        }
    }   
`