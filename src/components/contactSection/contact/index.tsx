import styled from "styled-components"
import { Address } from "../address"

export const Contact = () => {
    return (
        <Container>
            <div className="content">
                <Address />
            </div>
        </Container>
    )
}

const Container = styled.section`
    display: flex;
    flex-direction: column;
    flex: 1;

    .content {
        width: 100%;
        display: flex;
        justify-content: center;
    }
`