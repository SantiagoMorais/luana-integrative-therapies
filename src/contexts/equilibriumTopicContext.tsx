import { createContext, useState } from "react"

interface IEquilibriumTopics {
    topicSelected: string,
    setTopicSelected: React.Dispatch<React.SetStateAction<string>>,
    handleSelectedButton: (buttonType: string) => void;
}

export const EquilibriumTopicsContext = createContext<IEquilibriumTopics>({
    topicSelected: "",
    setTopicSelected: () => { },
    handleSelectedButton: () => { }
})

interface IEquilibriumTopicsProviderProps {
    children: React.ReactNode,
}
 
export const EquilibriumTopicsProvider: React.FC<IEquilibriumTopicsProviderProps> = ({ children }) => {
    const [topicSelected, setTopicSelected] = useState<string>("");

    const handleSelectedButton = (buttonType: string) => {
        setTopicSelected(buttonType === "posts" ? "posts" : "therapies") 
    }

    return (
        <EquilibriumTopicsContext.Provider value={{ topicSelected, setTopicSelected , handleSelectedButton}}>
            {children}
        </EquilibriumTopicsContext.Provider>
    )
}