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
import { faHourglassHalf } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

export const TherapiesTopics = () => {
    const { data, loading, fetchMore, error } = useQuery<IEquilibriumTopicsData>(GET_EQUILIBRIUM_TOPICS_QUERY, {
        variables: {
            first: 5
        }
    })
    const [loadingMore, setLoadingMore] = useState<boolean>(false);

    const loadMoreTopics = () => {
        if (loading || !data?.equilibriumTopicosConnection.pageInfo.hasNextPage) return;

        setLoadingMore(true)

        fetchMore({
            variables: {
                after: data.equilibriumTopicosConnection.pageInfo.endCursor,
                first: 5
            },
            updateQuery: (prevResult, { fetchMoreResult }) => {
                setLoadingMore(false)
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
                    ? <>
                        <div className="loading">
                            <FontAwesomeIcon icon={faHourglassHalf} spin className="icon" />
                        </div>
                        <p className="loadingMessage">
                            Carregando...
                        </p>
                    </>
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
                                    imagesHeightInRem={40}
                                    loadMore={loadMoreTopics}
                                    hasMore={hasMore}
                                    loading={loadingMore}
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
            color: ${theme.shadowColor};
            border: solid .2rem ${theme.shadowColor};
            box-shadow: 0 0 1rem ${theme.shadowColor};
            border-radius: 50%;
            width: 6rem;
            height: 6rem;
            display: flex;
            justify-content: center;
            align-items: center;

            .icon {
                font-size: ${fontSize.extraLargeSize};
            }

        }
        .loadingMessage {
            font-size: ${fontSize.mediumSize};
            color: ${theme.shadowColor};
            font-weight: ${fontWeight.medium};
        }

        .therapiesTitle {
            font-size: ${fontSize.largeSize};
            font-weight: ${fontWeight.medium};
            text-align: center;
        }
    }
`