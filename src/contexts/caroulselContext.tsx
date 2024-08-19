import React, { createContext, useEffect, useState } from "react";

interface ICarouselContextType {
    currentTopicId: string,
    setCurrentTopicId: React.Dispatch<React.SetStateAction<string>>,
    loadingContent: boolean
}

export const CarouselContext = createContext<ICarouselContextType>({
    currentTopicId: "",
    setCurrentTopicId: () => { },
    loadingContent: true
});

interface ICaroulselProviderProps {
    children: React.ReactNode,
}

export const CaroulselProvider: React.FC<ICaroulselProviderProps> = ({ children }) => {
    const [currentTopicId, setCurrentTopicId] = useState<string>(() => {
        const localTopic = localStorage.getItem('currentTopicName');
        return localTopic ? JSON.parse(localTopic) : "";
    });

    const [loadingContent, setloadingContent] = useState<boolean>(currentTopicId === "");

    useEffect(() => {
        window.localStorage.setItem('currentTopicName', JSON.stringify(currentTopicId))
    }, [currentTopicId])

    useEffect(() => {
        setloadingContent(currentTopicId === "")
    }, [currentTopicId])

    return (
        <CarouselContext.Provider value={{ currentTopicId, setCurrentTopicId, loadingContent }}>
            {children}
        </CarouselContext.Provider>
    )
}