import styled from "styled-components"

export const AboutMe = () => {
    return (
        <Container>
            <div className="content">
                <h2 className="title">Sobre mim</h2>
                div.
            </div>
        </Container>
    )
}

export const Container = styled.div`
    width: 100%;
    padding: 2rem;
    display: flex;
    justify-content: center;

    .content {
        max-width: 144rem;
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 2rem;
    }

    .content {
        font-size: 2.5rem;
        font-weight: 300;

        .title {
            margin-bottom: 2rem;
            font-size: 4rem;
            font-weight: 400;
        }

        .functionality {
            text-align: justify;
        }
    }
`