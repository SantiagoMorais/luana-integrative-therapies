import { IEquilibriumPostEdge } from "@utils/equilibriumBlogInterfaces";
import styled from "styled-components";
import { PostBanner } from "./postBanner";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAdd, faHourglassHalf } from "@fortawesome/free-solid-svg-icons";
import { fontSize, fontWeight, theme } from "@styles/theme";

interface IPostsListProps {
   infoEdge: IEquilibriumPostEdge[];
   hasMoreData: boolean;
   loadMore: () => void;
   loadingPosts: boolean;
}

export const PostsList: React.FC<IPostsListProps> = ({
   infoEdge,
   hasMoreData,
   loadMore,
   loadingPosts,
}) => {
   return (
      <Container $hasMoreData={hasMoreData}>
         <div className="postsContainer">
            {infoEdge.map((post) => (
               <PostBanner infoNode={post.node} key={post.node.id} />
            ))}
         </div>
         <button
            onClick={loadMore}
            className="loadMoreButton"
            disabled={hasMoreData ? false : true}
         >
            <FontAwesomeIcon icon={faAdd} className="icon" />
            Carregar mais
         </button>
         {loadingPosts && (
            <div className="loading">
               <FontAwesomeIcon icon={faHourglassHalf} spin className="icon" />
            </div>
         )}
      </Container>
   );
};

const Container = styled.ul<{ $hasMoreData: boolean }>`
   width: 100%;
   max-width: 144rem;
   display: flex;
   flex-direction: column;
   align-items: center;
   gap: 4rem;

   .postsContainer {
      width: 100%;
      max-width: 144rem;
      display: grid;
      grid-template-columns: repeat(3, minmax(25rem, 1fr));
      padding: 2rem;
      gap: 2rem;
   }

   .loadMoreButton {
      padding: 1rem 2rem;
      font-size: ${fontSize.mediumSize};
      display: flex;
      gap: 1rem;
      align-items: center;
      border-radius: 1rem;
      background-color: ${theme.secondaryColor};
      color: ${theme.secondaryTextColor};
      font-weight: ${fontWeight.medium};
      transition: 0.3s;
      border: none;
      cursor: ${(props) => (props.$hasMoreData ? "pointer" : "default")};
      opacity: ${(props) => (props.$hasMoreData ? "1" : ".6")};

      &:hover {
         ${(props) =>
            props.$hasMoreData
               ? ` background-color: ${theme.shadowColor};
        scale: 1.1;
        box-shadow: 0 0 1rem ${theme.shadowColor};`
               : ""};
      }

      &:focus {
         box-shadow: var(--tw-ring-inset) 0 0 0
            calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color);
      }
   }

   .loading {
      color: ${theme.shadowColor};
      border: solid 0.2rem ${theme.shadowColor};
      box-shadow: 0 0 1rem ${theme.shadowColor};
      border-radius: 50%;
      width: 6rem;
      height: 6rem;
      display: flex;
      justify-content: center;
      align-items: center;

      .icon {
         font-size: ${fontSize.extraLargeSize};
      }
   }

   @media (max-width: 900px) {
      .postsContainer {
         grid-template-columns: repeat(2, minmax(25rem, 1fr));
      }
   }

   @media (max-width: 600px) {
      .postsContainer {
         grid-template-columns: 1fr;
      }
   }
`;
