import { Footer } from "@components/footer";
import { Header } from "@components/header";
import styled from "styled-components";
import { EquilibriumBanner } from "./equilibriumBanner";
import { useContext } from "react";
import { EquilibriumTopicsContext } from "@contexts/equilibriumTopicContext";
import { TherapiesTopics } from "./therapiesTopics";
import { useQuery } from "@apollo/client";
import { GET_TOPICS_QUERY } from "@utils/blogAPI";
import { IEquilibriumTopicsData } from "@utils/blogInterfaces";

export const EquilibriumSection = () => {
    const { topicSelected } = useContext(EquilibriumTopicsContext);
    const { data, loading, fetchMore } = useQuery<IEquilibriumTopicsData>(GET_TOPICS_QUERY, {
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

    return (
        <Container data-testid="equilibriumSection">
            <Header />
            <EquilibriumBanner />
            {topicSelected === "posts"
                ? ""
                : data && (
                    <TherapiesTopics
                        topics={data}
                        loadMore={loadMoreTopics}
                        hasMore={hasMore}
                    />
                )
            }
            <Footer />
        </Container>
    );
};

const Container = styled.section`
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    
    .sectionsButtons {
        display: flex;
        gap: 1rem;
        width: 100%;
        justify-content: center;
    }
`
