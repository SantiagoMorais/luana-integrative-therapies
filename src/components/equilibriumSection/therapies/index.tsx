import { IAllData } from "@utils/blogInterfaces"
import styled from "styled-components"
import { CarouselSlides } from "@components/carouselModel";

export const Therapies: React.FC<IAllData> = ({ data }) => {
    const posts = data.posts;
    const topics = data.topicos;

    const getTopicsInfo = () => {
        interface ITopicInfo {
            id: string,
            image: string,
            description: string
        }

        const topicInfo: ITopicInfo[] = topics.map(topic => {
            return {
                id: topic.id,
                image: topic.imagem.url,
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
                    slidesNumber={2}
                    imagesHeightInRem={30} />
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
    }
`