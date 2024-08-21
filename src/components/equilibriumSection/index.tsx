import { Footer } from "@components/footer";
import { Header } from "@components/header";
import styled from "styled-components";
import { EquilibriumBanner } from "./equilibriumBanner";
import { useContext } from "react";
import { EquilibriumTopicsContext } from "@contexts/equilibriumTopicContext";
import { TherapiesTopics } from "./therapiesTopics";
import { useQuery } from "@apollo/client";
import { GET_TOPICS_QUERY } from "@utils/blogAPI";
import { ITopicsData } from "@utils/blogInterfaces";

export const EquilibriumSection = () => {
    const { topicSelected } = useContext(EquilibriumTopicsContext);
    const { data, loading, fetchMore, error } = useQuery<ITopicsData>(GET_TOPICS_QUERY)

    console.log(error);

    const loadMoreTopics = () => {
        if (loading || !data?.topicosConnection.pageInfo.hasNextPage) return;

        fetchMore({
            variables: {
                after: data.topicosConnection.pageInfo.endCursor,
                first: Math.min(5, data?.topicosConnection.edges.length % 5)
            },
            updateQuery: (prevResult, { fetchMoreResult }) => {
                if (!fetchMoreResult) return prevResult;

                return {
                    topicosConnection: {
                        ...fetchMoreResult.topicosConnection,
                        edges: [
                            ...prevResult.topicosConnection.edges,
                            ...fetchMoreResult.topicosConnection.edges
                        ]
                    }
                };
            }
        });
    };

    const hasMore = data?.topicosConnection.pageInfo.hasNextPage ?? false;

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
