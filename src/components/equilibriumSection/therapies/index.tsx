import { IAllData } from "@utils/blogInterfaces"
import styled from "styled-components"
import { CarouselSlides } from "../carouselModel";

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

    console.log(getTopicsInfo());
    

    return (
        <Container>
            <h2 className="title">Equilibrium</h2>
            <h3 className="subtitle">Equilíbrio e Bem-estar com as Terapias Integrativas</h3>
            <p>{posts.map(post => 
                <p>{post.titulo}</p>
            )}</p>
            <p>{topics.map(topic =>
                <p>{topic.nome}</p>
            )}</p>
            <CarouselSlides info={getTopicsInfo()} slidesNumber={2} imagesHeightInRem={30} spaceBetween={50}/>
        </Container>
    )
}

const Container = styled.section`
    padding: 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
`