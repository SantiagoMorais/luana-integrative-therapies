import { fontSize, fontWeight, theme } from "@styles/theme"
import { useState } from "react"
import styled from "styled-components"

interface IButtons {
    title: string,
    buttonType: string,
    id: number
}

export const SectionsButtons = () => {
    const [ buttonSelected, setButtonSelected ] = useState<string>("therapies");

    const handleSelectedButton = (buttonSelected: string) => {
        buttonSelected === "posts"
            ? setButtonSelected("posts")
            : setButtonSelected("therapies")
    }

    console.log(buttonSelected);
    
    const buttons: IButtons[] = [
        { title: "Nossas terapias", buttonType: "therapies", id: 0 },
        { title: "Nossas publicações", buttonType: "posts", id: 1 }
    ]

    return (
        <Container>
            {buttons.map(button =>
                <button
                    className="selectSection"
                    key={button.id}
                    onClick={() => handleSelectedButton(button.buttonType)}
                >
                    {button.title}
                </button>
            )}
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    gap: 2rem;
    padding: .5rem 0;
    position: relative;

    .selectSection {
        font-size: ${fontSize.basicSize};
        padding: .5rem 0;
        background: none;
        border-radius: 1rem;
        border: none;
        color: ${theme.textColor};
        width: 18rem;
        text-align: center;
        font-weight: ${fontWeight.medium};
        z-index: 2;
        cursor: pointer;
        transition: .3s;

        &:hover {
            scale: 1.05;
            opacity: .8;
            box-shadow: 0 0 1rem ${theme.shadowColor};
        }
    }

    &::after {
        content: "";
        position: absolute;
        bottom: 0;
        left: -50%;
        width: 200%;
        height: 100%;
        background: linear-gradient(to right, transparent 0%, ${theme.primaryColor} 30%, ${theme.primaryColor} 70%, transparent 100%);
    }
`