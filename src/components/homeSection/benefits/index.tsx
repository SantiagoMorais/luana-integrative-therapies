import { fontSize, fontWeight, theme } from "@styles/theme"
import styled from "styled-components"
import data from "@json/index.json"

export const Benefits = () => {
    return (
        <Container>
            <div className="title">Benefício das Terapias Integrativas</div>
            <ul className="benefits">
                {data &&
                    <>
                        {data.benefits.map((benefit, index) =>
                            <li key={index} className="benefit">
                                <p>{index + 1}.</p>
                                <p>{benefit}</p>
                            </li>
                        )}
                    </>
                }
            </ul>
        </Container>
    )
}

const Container = styled.div`
    width: 100%;
    background-color: ${theme.primaryColor};
    padding: 3rem 2rem 0;
    display: flex;
    flex-direction: column;
    align-items: center;

    .title {
        width: 100%;
        font-size: ${fontSize.extraLargeSize};
        text-align: center;
        padding: 1rem;
    }

    .benefits {
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: 1rem;
        padding: 0 1rem 3rem 1rem;
        max-width: 144rem;

        .benefit {
            font-size: ${fontSize.mediumSize};
            text-align: center;
            flex-grow: 1;
            flex-basis: 20rem;
            padding: 1rem;
            font-weight: ${fontWeight.thin};
            max-width: 40rem;

            p {
                &:first-child {
                    font-size: 150%;
                    font-weight: ${fontWeight.thin};
                    padding-bottom: 1rem;
                    border-bottom: .2rem solid ${theme.secondaryColor};
                    margin-bottom: 1rem;
                }
            }
        }
    }

    @media (max-width: 725px) {
        padding: 2rem 1rem 0;
    
        .title {
            font-size: ${fontSize.largeSize};
        }
    
        .benefits {
            gap: 1rem;
    
            .benefit {
                font-size: ${fontSize.basicSize};
            }
        }
    }

    @media (max-width: 425px) {
        .title {
            font-size: ${fontSize.mediumSize};
        }
    
        .benefits {
            gap: 0rem;
    
            .benefit {
                font-size: ${fontSize.smallSize};
            }
        }
    }
`