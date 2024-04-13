import styled from "styled-components"
import { NavBar } from "../navBar"
import { theme } from "@styles/theme"

export const Header = () => {
    return (
        <Container>
            <div className="content">
                <div className="title">
                    <h1 className="nameTitle">
                        Luana Vasconcellos Alvarenga
                    </h1>
                    <h2 className="professionalTitle">Cirurgiã Dentista e Terapeuta Integrativa</h2>
                </div>
                <NavBar />
            </div>
        </Container>
    )
}

const Container = styled.section`
    background-color: ${theme.primaryColor};
    display: flex;
    justify-content: center;

    .content {
        width: 100%;
        max-width: 144rem;
        padding: 0 5rem;
        display: flex;
        justify-content: space-around;
        align-items: baseline;
        flex-wrap: wrap;

        .title {
            position: relative;
            width: 38rem;
    
            .nameTitle {
                font-size: 3rem;
                font-family: ${theme.fontFamily};
                font-weight: 500;
                margin-bottom: 2rem;
    
                &::first-letter {
                    font-size: 5rem;
                    font-family: ${theme.fontFamily};
                }
            }
    
            .professionalTitle {
                font-size: 1.8rem;
                font-weight: 500;
                opacity: .8;
                position: absolute;
                bottom: 1.3rem;
                left: 3rem;
                text-transform: capitalize;
            }
        }
    }


    @media (max-width: 475px) {
        .content {
            padding: 0 2rem;
            
            .title {        
                position: relative;
                text-align: center;
            
                .nameTitle {
                    font-size: 2.5;
                    font-weight: 500;
                    margin: 1rem 0;
                    line-height: .7;
            
                    .firstLetter {
                        font-size: 4rem;
                    }
                }
            
                .professionalTitle {
                    font-size: 1.6rem;
                    position: static;
                    margin-bottom: 1rem;
                }
            }
        }
    }
`