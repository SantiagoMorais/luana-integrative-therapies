import styled from "styled-components";
import parse from "html-react-parser";

interface IPostVideo {
   video: string;
}

export const PostVideo: React.FC<IPostVideo> = ({ video }) => {
   return <Container>{parse(video)}</Container>;
};

const Container = styled.div`
   width: 100%;
   display: flex;
   justify-content: center;

   iframe {
      border-radius: 1rem;
      width: 60dvw;
      max-width: 80rem;
      height: calc(60dvw * 9 / 16);
      max-height: calc(80rem * 9 / 16);
   }

   @media (max-width: 768px) {
      position: relative;
      padding-bottom: 56.25%;
      height: 0;
      overflow: hidden;

      iframe {
         position: absolute;
         top: 0;
         left: 0;
         width: 100%;
         height: 100%;
         max-width: none;
      }
   }
`;
