import { IPostsData, ITopicsData } from "@utils/blogInterfaces"
import styled from "styled-components"
import { fontSize, fontWeight } from "@styles/theme";
import { TherapyContent } from "./therapyContent";
import { EquilibriumCaroulsel } from "../equilibriumCaroulsel";

interface ITherapiesProps {
    topics: ITopicsData,
    posts?: IPostsData
}

export const Therapies: React.FC<ITherapiesProps> = ({ topics = { topicosConnection: { edges: [] } } }) => {

    console.log('Received topics data:', topics);

    const getTopicsInfo = () => {
        interface ITopicInfo {
            id: string,
            content: string,
            description: string
        }

        if (!topics || !topics.topicosConnection) {
            return [];
        }

        const topicInfo: ITopicInfo[] = topics.topicosConnection.edges.map(topic => {
            return {
                id: topic.node.id,
                content: topic.node.imagem.url,
                description: topic.node.nome
            }
        })

        return topicInfo
    }

    console.log(getTopicsInfo());
    

    return (
        <Container>
            <div className="content">
                <h2 className="title">Equilibrium</h2>
                <h3 className="subtitle">Equilíbrio e Bem-estar com as Terapias Integrativas</h3>
                <EquilibriumCaroulsel
                    info={getTopicsInfo()}
                    slidesNumber={3}
                    imagesHeightInRem={40}
                />
                <TherapyContent data={topics.topicosConnection.edges}/>
            </div>
        </Container>
    )
}

const Container = styled.section`
    display: flex;
    justify-content: center;
    width: 100%;

    .content {
        padding: 2rem;
        display: flex;
        flex-direction: column;
        max-width: 144rem;
        align-items: center;
        width: 100%;
        gap: 2rem;
        overflow: hidden;

        .title {
            font-size: ${fontSize.extraLargeSize};
            font-weight: ${fontWeight.medium};
        }
        
        .subtitle {
            font-size: ${fontSize.mediumSize};
            font-weight: ${fontWeight.medium};    
        }
    }
`