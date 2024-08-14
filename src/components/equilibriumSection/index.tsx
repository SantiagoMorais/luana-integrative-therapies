import { useQuery } from "@apollo/client"
import { Footer } from "@components/footer"
import { Header } from "@components/header"
import { GET_POSTS_QUERY } from "@utils/blogAPI"
import styled from "styled-components"
import { Therapies } from "./therapies"
import { ErrorPage } from "./errorPage"

export const EquilibriumSection = () => {
    const { data, loading, error } = useQuery(GET_POSTS_QUERY);

    return (
        <Container>
            <Header />
            {loading ?
                <>
                </>
                : error ?
                    <ErrorPage />
                    : <Therapies posts={data}/>
            }
            <Footer />
        </Container>
    )
}

const Container = styled.section`
    min-height: 100vh;
    display: flex;
    flex-direction: column;
`