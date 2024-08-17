import { IAllData } from "@utils/blogInterfaces"
import styled from "styled-components"

export const Therapies: React.FC<IAllData> = ({data}) => {
    const posts = data.posts;
    const topics = data.topicos;

    return (
        <Container>
            <h2 className="title">Equilibrium</h2>
            <h3 className="subtitle">Equilíbrio e Bem-estar com as Terapias Integrativas</h3>
            <p>{posts.map(post => 
                <p>{post.titulo}</p>
            )}</p>
            <p>{topics.map(topic =>
                <p>{topic.nome}</p>
            )}</p>
        </Container>
    )
}

const Container = styled.section`
    
`