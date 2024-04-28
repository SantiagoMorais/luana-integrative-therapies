import { AboutMe } from "@components/aboutMe"
import { Footer } from "@components/footer"
import { Header } from "@components/header"
import styled from "styled-components"

export const AboutSection = () => {
    return (
        <Container>
            <Header />
            <AboutMe />
            <Footer />
        </Container>
    )
}

const Container = styled.section`
    min-height: 100vh;
    display: flex;
    flex-direction: column;
`