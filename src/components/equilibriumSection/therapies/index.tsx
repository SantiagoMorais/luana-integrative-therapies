import { IAllData } from "@utils/blogInterfaces"
import styled from "styled-components"
import { CarouselSlides } from "@components/carouselModel";
import { fontSize, fontWeight } from "@styles/theme";
import { TherapyContent } from "./therapyContent";

interface ITherapiesProps {
    data: IAllData
}

export const Therapies: React.FC<ITherapiesProps> = ({ data }) => {
    // const posts = data.posts;
    const topics = data.topicos;

    console.log(topics);
    

    const getTopicsInfo = () => {
        interface ITopicInfo {
            id: string,
            content: string,
            description: string
        }

        const topicInfo: ITopicInfo[] = topics.map(topic => {
            return {
                id: topic.id,
                content: topic.imagem.url,
                description: topic.nome
            }
        })

        return topicInfo
    }

    return (
        <Container>
            <div className="content">
                <h2 className="title">Equilibrium</h2>
                <h3 className="subtitle">Equilíbrio e Bem-estar com as Terapias Integrativas</h3>
                <CarouselSlides
                    info={getTopicsInfo()}
                    slidesNumber={3}
                    imagesHeightInRem={40}
                    clickableContent
                    />
                <TherapyContent />
            </div>
        </Container>
    )
}

const Container = styled.section`
    display: flex;
    justify-content: center;
    width: 100%;

    .content {
        padding: 2rem;
        display: flex;
        flex-direction: column;
        max-width: 144rem;
        align-items: center;
        width: 100%;
        gap: 2rem;
        overflow: hidden;

        .title {
            font-size: ${fontSize.extraLargeSize};
            font-weight: ${fontWeight.medium};
        }
        
        .subtitle {
            font-size: ${fontSize.mediumSize};
            font-weight: ${fontWeight.medium};    
        }
    }
`