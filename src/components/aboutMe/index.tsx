import { theme } from "@styles/theme"
import styled from "styled-components"
import { PresentationBar } from "./presentationBar"
import data from "@json/index.json"

export const AboutMe = () => {
    return (
        <Container>
            <h2 className="title">Sobre mim</h2>
            <PresentationBar />
            <div className="content">
                <div className="aboutText">
                    {data.aboutMe.map((paragraph, index) =>
                        <p className="paragraph" key={index} >
                            {paragraph}
                        </p>
                    )}
                </div>
            </div>
        </Container>
    )
}

export const Container = styled.div`
    width: 100%;
    padding: 2rem 2rem 4rem;
    display: flex;
    flex: 1;
    flex-direction: column;
    align-items: center;
    gap: 2rem;

    .title {
        font-size: 4rem;
        font-weight: 400;
        text-align: center;
    }
        
    .content {
        max-width: 144rem;
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 2rem;
        font-size: 2.5rem;
        font-weight: 300;

        .aboutText {
            display: flex;
            flex-direction: column;

            .paragraph {
                text-align: justify;
                color: ${theme.textColor};
                font-size: 2.5rem;
                text-indent: 3rem;
            }
        }
    }

    @media (max-width: 425px) {
        .content {
            .aboutText {
                .paragraph {
                    font-size: 2rem;
                }
            }
        }
    }

`