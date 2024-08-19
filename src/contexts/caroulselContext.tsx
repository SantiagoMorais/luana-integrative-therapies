import React, { createContext, useEffect, useState } from "react";

interface ICarouselContextType {
    currentTopic: string,
    setCurrentTopic: React.Dispatch<React.SetStateAction<string>>,
    loading: boolean
}

export const CarouselContext = createContext<ICarouselContextType>({
    currentTopic: "",
    setCurrentTopic: () => { },
    loading: true
});

interface ICaroulselProviderProps {
    children: React.ReactNode,
}

export const CaroulselProvider: React.FC<ICaroulselProviderProps> = ({ children }) => {
    const [currentTopic, setCurrentTopic] = useState<string>(() => {
        const localTopic = localStorage.getItem('currentTopicName');
        return localTopic ? JSON.parse(localTopic) : "";
    });

    const [loading, setLoading] = useState<boolean>(currentTopic === "");

    useEffect(() => {
        window.localStorage.setItem('currentTopicName', JSON.stringify(currentTopic))
    }, [currentTopic])

    useEffect(() => {
        setLoading(currentTopic === "")
    }, [currentTopic])

    return (
        <CarouselContext.Provider value={{ currentTopic, setCurrentTopic, loading }}>
            {children}
        </CarouselContext.Provider>
    )
}