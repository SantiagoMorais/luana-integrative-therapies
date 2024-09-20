import { faRotateLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fontSize, fontWeight, ITheme } from "@styles/theme";
import { useThemeContext } from "hooks/useThemeContext";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";

interface IContent {
   date: string;
}

export const PostDate: React.FC<IContent> = ({ date }) => {
   const theme = useThemeContext();
   const location = useLocation();
   const locationName = location.pathname.slice(1).split("/")[0];

   const dateConvertedToPtStandard = date
      .toString()
      .split("-")
      .reverse()
      .join("/");

   return (
      <Container $theme={theme}>
         {date ? (
            <p className="dateData">
               Publicado/atualizado em: {dateConvertedToPtStandard}
            </p>
         ) : (
            ""
         )}
         <Link to={`/${locationName}`} className="returnButton">
            <FontAwesomeIcon icon={faRotateLeft} className="icon" />
            <p className="message">Retornar para às publicações</p>
         </Link>
      </Container>
   );
};

const Container = styled.div<{ $theme: ITheme }>`
   padding: 0rem 2rem;
   display: flex;
   justify-content: center;
   flex-direction: column;
   align-items: center;
   flex-wrap: wrap;
   gap: 2rem;

   .dateData {
      font-size: ${fontSize.mediumSize};
      color: ${({ $theme }) => $theme.textColor};
      font-weight: ${fontWeight.medium};
      position: relative;

      &::after {
         content: "";
         position: absolute;
         bottom: -1rem;
         left: 0;
         width: 100%;
         height: 0.2rem;
         background: linear-gradient(
            to right,
            transparent,
            ${({ $theme }) => $theme.secondaryColor},
            transparent
         );
      }
   }
`;
