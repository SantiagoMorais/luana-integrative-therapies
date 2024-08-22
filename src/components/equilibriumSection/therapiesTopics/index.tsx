import { IEquilibriumTopicsData, IPostsData } from "@utils/blogInterfaces"
import styled from "styled-components"
import { fontSize, fontWeight } from "@styles/theme";
import { TherapiesList } from "./therapiesList";

interface ITherapiesProps {
    topics: IEquilibriumTopicsData,
    posts?: IPostsData,
    loadMore: () => void,
    hasMore: boolean
}

export const TherapiesTopics: React.FC<ITherapiesProps> = ({ topics, loadMore, hasMore }) => {
    const hadleSlidesPerView = () : number => {
        const topicosLength: number = topics.equilibriumTopicosConnection.edges.length
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
                        info={topics.equilibriumTopicosConnection.edges}
                        slidesPerView={hadleSlidesPerView()}
                        imagesHeightInRem={30}
                        loadMore={loadMore}
                        hasMore={hasMore}
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