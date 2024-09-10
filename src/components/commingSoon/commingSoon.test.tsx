import { render, screen } from "@testing-library/react";
import correctImage from "@assets/imgs/pageComingSoon.jpg";
import { CommingSoon } from ".";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import { HomeSection } from "@components/homeSection";
import userEvent from "@testing-library/user-event";
import { renderWithProviders } from "@utils/functions";
import { ThemeProvider } from "@contexts/themeContext";

describe("<CommingSoon />", () => {
   it("should render the component correctly", () => {
      renderWithProviders(<CommingSoon />);
      const title = screen.getByRole("heading", {
         name: /Em Breve: Novidades Estão Chegando!/i,
      });
      expect(title).toBeInTheDocument();
   });

   it("should render the image correctly", () => {
      renderWithProviders(<CommingSoon />);
      const image = screen.getByRole("img");
      expect(image).toHaveAttribute("src", correctImage);
   });

   it("should render the text correctly", () => {
      renderWithProviders(<CommingSoon />);
      const text = document.querySelectorAll(".text");
      expect(text).toMatchSnapshot();
   });

   it("should return to home page when clicked on the 'return' link", async () => {
      render(
         <MemoryRouter initialEntries={["/comming-soon"]}>
            <ThemeProvider>
               <Routes>
                  <Route path="/comming-soon" element={<CommingSoon />} />
                  <Route path="/" element={<HomeSection />} />
               </Routes>
            </ThemeProvider>
         </MemoryRouter>
      );
      const user = userEvent.setup();
      const returnLink = screen.getByRole("link", { name: /aqui/i });

      expect(returnLink).toBeInTheDocument();

      await user.click(returnLink);

      const slogan = screen.getByText(
         /Descubra uma jornada de cura e harmonia através de terapias integrativas./i
      );
      expect(slogan).toBeInTheDocument();
   });
});
