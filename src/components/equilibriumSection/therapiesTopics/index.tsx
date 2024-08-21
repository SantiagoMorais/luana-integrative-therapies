import { IPostsData, ITopicsData } from "@utils/blogInterfaces"
import styled from "styled-components"
import { TherapyContent } from "./therapyContent";
import { EquilibriumCaroulsel } from "../equilibriumCaroulsel";

interface ITherapiesProps {
    topics: ITopicsData,
    posts?: IPostsData
}

export const TherapiesTopics: React.FC<ITherapiesProps> = ({ topics = { topicosConnection: { edges: [] } } }) => {
    const getTopicsInfo = () => {
        interface ITopicInfo {
            id: string,
            content: string,
            description: string
        }

        if (!topics || !topics.topicosConnection) {
            return [];
        }

        const topicInfo: ITopicInfo[] = topics.topicosConnection.edges.map(topic => {
            return {
                id: topic.node.id,
                content: topic.node.imagem.url,
                description: topic.node.nome
            }
        })

        return topicInfo
    }

    return (
        <Container>
            <div className="content">
                <EquilibriumCaroulsel
                    info={getTopicsInfo()}
                    slidesNumber={3}
                    imagesHeightInRem={40}
                />
                <TherapyContent data={topics.topicosConnection.edges}/>
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
    }
`