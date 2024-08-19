import styled from "styled-components"
import { NavBar } from "./navBar"
import { theme } from "@styles/theme"
import { Link } from "react-router-dom"
import { useContext } from "react"
import { NavBarContext } from "@contexts/navBarContext"

export const Header = () => {
    const { setCurrentLink } = useContext(NavBarContext);

    const handlePageChange = (link: string) => {
        setCurrentLink(link)
    }
    
    return (
        <Container>
            <div className="content">
                <Link to="/" className="title" onClick={() => handlePageChange("home")}>
                    <h1 className="nameTitle">
                        Luana Vasconcellos Alvarenga
                    </h1>
                    <h2 className="professionalTitle">Cirurgiã Dentista e Terapeuta Integrativa</h2>
                </Link>
                <NavBar />
            </div>
        </Container>
    )
}

const Container = styled.section`
    background: linear-gradient(90deg, ${theme.primaryColor} 0%, ${theme.tertiaryColor} 100%);    display: flex;
    justify-content: center;

    .content {
        width: 100%;
        max-width: 144rem;
        padding: 0 4rem;
        display: flex;
        justify-content: space-around;
        align-items: baseline;
        flex-wrap: wrap;

        .title {
            position: relative;
            width: 34rem;
            transition: .3s;
    
            .nameTitle {
                font-size: 3rem;
                font-family: ${theme.fontFamily};
                font-weight: 500;
                margin-bottom: 2rem;
                color: ${theme.textColor};
                
                &::first-letter {
                    font-size: 166%;
                    font-family: ${theme.fontFamily};
                }
            }
            
            .professionalTitle {
                color: ${theme.textColor};
                font-size: 1.8rem;
                font-weight: 500;
                opacity: .8;
                position: absolute;
                bottom: 1.3rem;
                left: 3rem;
                letter-spacing: .1rem;
                text-transform: capitalize;
            }

            &:hover {
                opacity: .6;
            }
        }
    }


    @media (max-width: 475px) {
        background: linear-gradient(180deg, ${theme.tertiaryColor} 0%, ${theme.primaryColor} 90%);
        display: flex;

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