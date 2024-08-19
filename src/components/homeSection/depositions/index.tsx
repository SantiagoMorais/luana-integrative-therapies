import styled from "styled-components"
import data from "@json/index.json"
import { fontSize, fontWeight, theme } from "@styles/theme"
import { CarouselSlides } from "@components/carouselModel"

export const Depositions = () => {
    const getTopicsInfo = () => {
        interface IDepositions {
            id: string,
            content: string,
            description: string,
            contentIsAText: boolean
        }

        const topicInfo: IDepositions[] = data.depositions.map(deposition => {
            return {
                id: deposition.patientName,
                content: deposition.deposition,
                description: deposition.patientName,
                contentIsAText: true,
            }
        })

        return topicInfo
    }

    return (
        <Container>
            <h2 className="title">Depoimentos de pacientes</h2>
            <div className="content">
                <div className="depositions">
                    <CarouselSlides slidesNumber={2} info={getTopicsInfo()} titleColor={theme.secondaryColor} />
                </div>
            </div>
        </Container>
    )
}

const Container = styled.div`
    margin-bottom: 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;

    .title {
        width: 100%;
        text-align: center;
        font-size: ${fontSize.extraLargeSize};
        font-weight: ${fontWeight.medium};
        background-color: ${theme.primaryColor};
        padding: 2rem 0;
    }

    .content {
        display: flex;
        justify-content: center;
        max-width: 144rem;
        width: 100%;
        
        .depositions {
            width: 100%;
            padding: 2rem;
            font-size: ${fontSize.extraLargeSize};
        }
    }


    @media (max-width: 425px) {
        margin-bottom: 1rem;
    
        .title {
            font-size: ${fontSize.mediumSize};
        }
    }
`