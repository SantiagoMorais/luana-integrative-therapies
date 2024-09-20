import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fontSize, fontWeight, ITheme } from "@styles/theme";
import { useThemeContext } from "hooks/useThemeContext";
import styled from "styled-components";

export const ImageNotFound = () => {
   const theme = useThemeContext();

   return (
      <Container $theme={theme}>
         <FontAwesomeIcon icon={faMagnifyingGlass} className="icon" />
         <h3 className="imageNotFoundTitle">Imagem não encontrada</h3>
      </Container>
   );
};

const Container = styled.div<{ $theme: ITheme }>`
   float: right;
   height: 50dvh;
   min-height: 30rem;
   max-height: 50rem;
   border-radius: 0.5rem;
   border: 0.2rem solid ${({ $theme }) => $theme.primaryColor};
   width: 50%;
   max-width: 50rem;
   margin: 0rem 0rem 1rem 2rem;
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   color: ${({ $theme }) => $theme.textColor};

   .icon {
      font-size: ${fontSize.basicSize};
   }

   .imageNotFoundTitle {
      font-size: ${fontSize.basicSize};
      font-weight: ${fontWeight.medium};
   }
`;
