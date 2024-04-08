import styled from "styled-components"
import data from "@json/index.json"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons"
import { theme } from "@styles/theme"

export const Depositions = () => {
    return (
        <Container>
            <h2 className="title">Depoimentos de pacientes</h2>
            <ul className="depositions">
                {data.depositions &&
                    <>
                        {data.depositions.map((patient, index) =>
                            <li key={index} className="deposition">
                                <FontAwesomeIcon icon={faQuoteLeft} className="icon" />
                                <p className="deposition">
                                    "{patient.deposition}"
                                </p>
                                <p className="patientName">{patient.patientName}</p>
                            </li>
                        )}
                    </>
                }
            </ul>
        </Container>
    )
}

const Container = styled.div`
    margin-bottom: 5rem;

    .title {
        text-align: center;
        font-size: 4rem;
        font-weight: 400;
        background-color: ${theme.primaryColor};
        padding: 2rem 0;
    }

    .depositions {
        padding: 3rem;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;

        .icon {
            font-size: 5rem;
            color: ${theme.tertiaryColor};
        }

        .deposition {
            font-size: 2rem;
            text-align: center;
            flex-grow: 1;
            flex-basis: 20rem;
            padding: 1rem;
            font-weight: 300;
        }

        .patientName {
            font-weight: 500;
            color: ${theme.tertiaryColor};
        }
    }
`