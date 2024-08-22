import { IEquilibriumTopicsData } from "@utils/blogInterfaces"
import styled from "styled-components"
import { fontSize, fontWeight, theme } from "@styles/theme";
import { TherapiesList } from "./therapiesList";
import { TherapyContent } from "./therapyContent";
import { useQuery } from "@apollo/client";
import { GET_EQUILIBRIUM_TOPICS_QUERY } from "@utils/blogAPI";
import { ErrorPage } from "../errorPage";
import { CommingSoon } from "@components/commingSoon";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

export const TherapiesTopics = () => {
    const { data, loading, fetchMore, error } = useQuery<IEquilibriumTopicsData>(GET_EQUILIBRIUM_TOPICS_QUERY, {
        variables: {
            first: 5
        }
    })

    const loadMoreTopics = () => {
        if (loading || !data?.equilibriumTopicosConnection.pageInfo.hasNextPage) return;

        fetchMore({
            variables: {
                after: data.equilibriumTopicosConnection.pageInfo.endCursor,
                first: 5
            },
            updateQuery: (prevResult, { fetchMoreResult }) => {
                if (!fetchMoreResult) return prevResult;

                return {
                    equilibriumTopicosConnection: {
                        ...fetchMoreResult.equilibriumTopicosConnection,
                        edges: [
                            ...prevResult.equilibriumTopicosConnection.edges,
                            ...fetchMoreResult.equilibriumTopicosConnection.edges
                        ]
                    }
                };
            }
        });
    };

    const hasMore = data?.equilibriumTopicosConnection.pageInfo.hasNextPage ?? false;

    const hadleSlidesPerView = (): number => {
        if (!data || !data.equilibriumTopicosConnection) {
            return 1;
        }

        const topicosLength: number = data.equilibriumTopicosConnection.edges.length
        return topicosLength < 5 ? topicosLength : 4
    }

    return (
        <Container>
            <div className="content">

                {loading
                    ? <p className="loading">
                        <FontAwesomeIcon icon={faSpinner} spin /> Carregando...
                    </p>
                    : error
                        ? <ErrorPage />
                        : data && data?.equilibriumTopicosConnection.edges.length > 0
                            ?
                            <>
                                <h2 className="therapiesTitle">
                                    Veja alguns dos nossos serviços:
                                </h2>
                                <TherapiesList
                                    info={data.equilibriumTopicosConnection.edges}
                                    slidesPerView={hadleSlidesPerView()}
                                    imagesHeightInRem={30}
                                    loadMore={loadMoreTopics}
                                    hasMore={hasMore}
                                />
                                <TherapyContent data={data.equilibriumTopicosConnection.edges} />
                            </>
                            : <CommingSoon />
                }
            </div >
        </Container >
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

        .loading {
            font-size: ${fontSize.mediumSize};
            display: flex;
            gap: 1rem;
            align-items: center;
            color: ${theme.textColor};
        }

        .therapiesTitle {
            font-size: ${fontSize.largeSize};
            font-weight: ${fontWeight.medium};
            text-align: center;
        }
    }
`