import { Footer } from "@components/footer"
import { Header } from "@components/header"
import styled from "styled-components"

export const AboutSection = () => {
    return (
        <Container>
            <Header />
            <Footer />
        </Container>
    )
}

const Container = styled.section`
    height: 100%;
    display: flex;
    flex-direction: column;
`