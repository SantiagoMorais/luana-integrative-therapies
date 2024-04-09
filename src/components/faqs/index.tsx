import styled from "styled-components"
import data from "@json/index.json"
import { theme } from "@styles/theme"
import { useState } from "react"

export const FAQs = () => {
    const [questionSelected, setQuestionSelected] = useState('')

    const handleAccordion = (faq: string) => {
        questionSelected === faq ? setQuestionSelected('') : setQuestionSelected(faq)
    }

    return (
        <Container>
            <h2 className="title">Perguntas Frequentes</h2>
            {data.faqs &&
                <ul className="faqs">
                    {data.faqs.map((faq, index) =>
                        <li className="faq" key={index} onClick={() => handleAccordion(faq.question)}>
                            <p className="question" data-testid="question">{faq.question}</p>
                            <p className={`answer ${questionSelected === faq.question ? "selected" : ''}`} data-testid="answer">{faq.answer}</p>
                        </li>
                    )}
                </ul>
            }
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 3rem;
    margin-bottom: 5rem;
    padding: 0 3rem;

    .title {
        font-size: 4rem;
        font-weight: 400;
    }

    .faqs {
        max-width: 100rem;
        display: flex;
        flex-direction: column;
        gap: 2rem;
        font-size: 2rem;

        .faq {
            cursor: pointer;

            &:hover > .question {
                opacity: .6;
            }

            .question {
                font-size: 2.5rem;
                padding-bottom: 1rem;
                border-bottom: .2rem solid ${theme.secondaryColor};
                transition: .3s;
            }

            .answer {
                height: 0;
                overflow: hidden;
                transition: .3s;
                margin-top: 1rem;
                background-color: ${theme.primaryColor};
                padding: 0 1rem;
                border-radius: 1rem;

                &.selected {
                    height: 12rem;
                }
            }
        }
    }

    @media (max-width: 768px) {
        padding: 0 2rem;

        .title {
            font-size: 3rem;
        }
    
        .faqs {
            .faq {
                .question {
                    text-align: center;
                }

                .answer {
                    &.selected {
                        height: 17rem;
                    }
                }
            }
        }
    }

    @media (max-width: 620px) {
        .faqs {
            .faq {
                .answer {
                    &.selected {
                        height: 25rem;
                    }
                }
            }
        }
    }

    @media (max-width: 450px) {
        .faqs {
            .faq {
                .answer {
                    &.selected {
                        height: 32rem;
                    }
                }
            }
        }
    }

    @media (max-width: 350px) {
        .faqs {
            .faq {
                .answer {
                    &.selected {
                        height: 44rem;
                    }
                }
            }
        }
    }

    @media (max-width: 275px) {
        .faqs {
            .faq {
                .answer {
                    &.selected {
                        height: fit-content;
                    }
                }
            }
        }
    }
`