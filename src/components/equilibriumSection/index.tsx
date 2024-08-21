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
    const { data } = useQuery<ITopicsData>(GET_TOPICS_QUERY)

    // const loadMoreTopics = () => {
    //     if (loading || !data?.topicosConnection.pageInfo.hasNextPage) return;

    //     fetchMore({
    //         variables: {
    //             after: data.topicosConnection.pageInfo.endCursor
    //         },
    //         updateQuery: (prevResult, { fetchMoreResult }) => {
    //             if (!fetchMoreResult) return prevResult;

    //             return {
    //                 topicosConnection: {
    //                     ...fetchMoreResult.topicosConnection,
    //                     edges: [
    //                         ...prevResult.topicosConnection.edges,
    //                         ...fetchMoreResult.topicosConnection.edges
    //                     ]
    //                 }
    //             };
    //         }
    //     });
    // };

    return (
        <Container data-testid="equilibriumSection">
            <Header />
            <EquilibriumBanner />
            {topicSelected === "posts"
                ? ""
                : data && <TherapiesTopics topics={data} />
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
