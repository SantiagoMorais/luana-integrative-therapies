import { IPostsData, ITopicsData } from "@utils/blogInterfaces"
import styled from "styled-components"
import { fontSize, fontWeight } from "@styles/theme";
import { TherapiesList } from "./therapiesList";

interface ITherapiesProps {
    topics: ITopicsData,
    posts?: IPostsData
}

export const TherapiesTopics: React.FC<ITherapiesProps> = ({ topics = { topicosConnection: { edges: [] } } }) => {
    // const getTopicsInfo = () => {
    //     interface ITopicInfo {
    //         id: string,
    //         content: string,
    //         description: string
    //     }

    //     if (!topics || !topics.topicosConnection) {
    //         return [];
    //     }

    //     const topicInfo: ITopicInfo[] = topics.topicosConnection.edges.map(topic => {
    //         return {
    //             id: topic.node.id,
    //             content: topic.node.imagem.url,
    //             description: topic.node.nome
    //         }
    //     })

    //     return topicInfo
    // }

    const hadleSlidesPerView = () : number => {
        const topicosLength: number = topics.topicosConnection.edges.length
        return topicosLength < 5 ? topicosLength : 4
    }

    return (
        <Container>
            <div className="content">
                <h2 className="therapiesTitle">
                    Veja alguns dos nossos serviços:
                </h2>
                {topics &&
                    <TherapiesList
                        info={topics.topicosConnection.edges}
                        slidesPerView={hadleSlidesPerView()}
                        imagesHeightInRem={30}
                    />
                }
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
        gap: 1rem;
        overflow: hidden;

        .therapiesTitle {
            font-size: ${fontSize.largeSize};
            font-weight: ${fontWeight.medium};
            text-align: center;
        }
    }
`