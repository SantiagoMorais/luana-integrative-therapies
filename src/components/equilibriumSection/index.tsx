import { Footer } from "@components/footer";
import { Header } from "@components/header";
import styled from "styled-components";
import { EquilibriumBanner } from "./equilibriumBanner";

export const EquilibriumSection = () => {

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
