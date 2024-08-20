import { useQuery } from "@apollo/client";
import { Footer } from "@components/footer";
import { Header } from "@components/header";
import { GET_TOPICS_QUERY } from "@utils/blogAPI";
import styled from "styled-components";
import { Therapies } from "./therapies";
import { ErrorPage } from "./errorPage";
import { ITopicsData } from "@utils/blogInterfaces";
import { useEffect } from "react";

export const EquilibriumSection = () => {
    const { data, loading, error, fetchMore } = useQuery<ITopicsData>(GET_TOPICS_QUERY, {
        variables: {
            after: null, // Inicia sem cursor
            first: 5     // Número de itens por página
        },
        notifyOnNetworkStatusChange: true // Permite que o componente atualize o estado de loading
    });

    const loadMoreTopics = () => {
        if (loading || !data?.topicosConnection.pageInfo.hasNextPage) return;

        fetchMore({
            variables: {
                after: data.topicosConnection.pageInfo.endCursor
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

    console.log(data?.topicosConnection.edges);
    

    useEffect(() => {

    }, [])

    return (
        <Container data-testid="equilibriumSection">
            <Header />
            {loading && <p>Loading...</p>}
            {error ? (
                <ErrorPage />
            ) : (
                <>
                    {data && <Therapies topics={data} />}
                    {data?.topicosConnection.pageInfo.hasNextPage && (
                        <button onClick={loadMoreTopics}>Load More</button>
                    )}
                </>
            )}
            <Footer />
        </Container>
    );
};

const Container = styled.section`
    min-height: 100vh;
    display: flex;
    flex-direction: column;
`;
