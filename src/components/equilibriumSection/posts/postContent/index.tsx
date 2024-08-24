import { useQuery } from "@apollo/client"
import { ErrorPage } from "@components/equilibriumSection/errorPage"
import { Footer } from "@components/footer"
import { Header } from "@components/header"
import { GET_POST_BY_ID_QUERY } from "@utils/blogAPI"
import { IEquilibriumPostById } from "@utils/blogInterfaces"
import { useParams } from "react-router-dom"
import styled from "styled-components"
import parser from "html-react-parser"

export const PostContent = () => {
    const { id } = useParams();
    const { data, loading, error } = useQuery<IEquilibriumPostById>(GET_POST_BY_ID_QUERY, {
        variables: { id }
    });
    
    return (
        <Container>
            <Header />
            <p>aqui é o post content</p>
            {loading
                ? <p>loading</p>
                : error
                    ? <ErrorPage />
                    : data
                    ? <>
                        <h2 className="title">{data?.equilibriumPost.titulo}</h2>
                        <div className="descriptionContent">
                            {
                                data?.equilibriumPost.imagem?.url
                                ?                             <img className="topicImage" src={data?.equilibriumPost.imagem.url} alt={`Imagem do tratamento ${data?.equilibriumPost.titulo}`} />
                                : <>
                                    <p>erro</p>
                                </>
                            }
                            {data && parser(data.equilibriumPost.texto.html)}
                        </div>
                    </>
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
`