import { IPostsData } from "@utils/blogAPI"
import styled from "styled-components"

export const Therapies: React.FC<IPostsData> = ({posts}) => {
    return (
        <Container>
            <h2 className="title">Equilibrium</h2>
            <h3 className="subtitle">Equilíbrio e Bem-estar com as Terapias Integrativas</h3>
        </Container>
    )
}

const Container = styled.section`
    
`