import styled from "styled-components"
import { Header } from "../header"
import { Hero } from "../hero"
import { Benefits } from "@components/benefits"
import { TherapeuticCare } from "@components/therapeuticCare"
import { Depositions } from "@components/depositions"
import { FAQs } from "@components/faqs"
import { Footer } from "@components/footer"

export const Home = () => {
    return (
        <Container>
            <div className="frontPage">
                <Header />
                <Hero />
            </div>
            <Benefits />
            <TherapeuticCare />
            <Depositions />
            <FAQs />
            <Footer />
        </Container>
    )
}

const Container = styled.section`
    width: 100%;
    min-height: 100dvh;

    .frontPage {
        display: flex;
        flex-direction: column;
        flex: 1;
        height: 100dvh;
    }
`