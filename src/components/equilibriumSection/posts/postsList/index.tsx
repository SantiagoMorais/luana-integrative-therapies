import { IEquilibriumPostEdge } from "@utils/blogInterfaces"
import styled from "styled-components"
import { PostBanner } from "./postBanner";

interface IPostsListProps {
    infoEdge: IEquilibriumPostEdge[],
    hasMoreData: boolean,
    loadMore: () => void;
}

export const PostsList: React.FC<IPostsListProps> = ({ infoEdge, hasMoreData, loadMore }) => {
    return (
        <Container>
            {infoEdge.map(post => 
                <PostBanner infoNode={post.node} key={post.node.id}/>
            )}
        </Container>
    )
}

const Container = styled.ul`
    width: 100%;
    max-width: 144rem;
    display: grid;
    grid-template-columns: repeat(3, minmax(25rem, 1fr));
    padding: 2rem;
    gap: 2rem;
    margin-bottom: 3rem;

    @media(max-width: 900px) {
        grid-template-columns: repeat(2, minmax(25rem, 1fr));
    }

    @media(max-width: 600px) {
        grid-template-columns: 1fr;
    }
`
