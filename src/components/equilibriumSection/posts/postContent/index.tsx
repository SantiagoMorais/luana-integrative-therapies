import { useQuery } from "@apollo/client"
import { ErrorPage } from "@components/equilibriumSection/errorPage"
import { Footer } from "@components/footer"
import { Header } from "@components/header"
import { GET_POST_BY_ID_QUERY } from "@utils/blogAPI"
import { IEquilibriumPostById } from "@utils/blogInterfaces"
import { useParams } from "react-router-dom"
import styled from "styled-components"
import { Content } from "./content"

export const PostContent = () => {
    const { id } = useParams();
    const { data, loading, error } = useQuery<IEquilibriumPostById>(GET_POST_BY_ID_QUERY, {
        variables: { id }
    });

    return (
        <Container>
            <Header />
            {loading
                ? <p>loading</p>
                : error
                    ? <ErrorPage />
                    : data
                        ? <Content data={data}/>
                        : <ErrorPage />
            }
            <Footer />
        </Container>
    )
}

const Container = styled.section`
    display: flex;
    flex-direction: column;
    height: 100dvh;
    
    .postContent {
        margin-bottom: 2rem;
        width: 100%;
        max-width: 144rem;
    }
`