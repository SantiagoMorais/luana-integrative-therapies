import { Contact } from "./contact"
import { Footer } from "@components/footer"
import { Header } from "@components/header"
import styled from "styled-components"

export const ContactSection = () => {
    return (
        <Container>
            <Header />
            <Contact />
            <Footer />
        </Container>
    )
}

const Container = styled.section`
    display: flex;
    flex-direction: column;
    min-height: 100vh;
`