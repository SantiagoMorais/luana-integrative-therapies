import styled from "styled-components"
import { NavBar } from "../navBar"
import { theme } from "@styles/theme"

export const Header = () => {
    return (
        <Container>
            <div className="title">
                <h1 className="nameTitle">
                    <span className="firstLetter">L</span>uana Vasconcellos Alvarenga
                </h1>
                <h2 className="professionalTitle">Cirurgiã Dentista Especialista em Terapias Integrativas</h2>
            </div>
            <NavBar />
        </Container>
    )
}

const Container = styled.section`
    width: 100%;
    background-color: ${theme.primaryColor};
    padding: 0 5rem;
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .title {
        .nameTitle {
            font-size: 3rem;
            font-family: ${theme.fontFamily};
            font-weight: 500;
            margin-bottom: 2rem;

            .firstLetter {
                font-size: 6rem;
                font-family: ${theme.fontFamily};
            }
        }

        .professionalTitle {
            font-size: 1.8rem;
            font-weight: 500;
            opacity: .8;
            position: absolute;
            bottom: 1.3rem;
            left: 11rem;
            text-transform: capitalize;
        }
    }
`