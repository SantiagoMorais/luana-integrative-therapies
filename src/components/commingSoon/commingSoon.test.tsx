import { render, screen } from "@testing-library/react";
import correctImage from "@assets/imgs/pageComingSoon.jpg";
import { CommingSoon } from ".";
import { BrowserRouter, MemoryRouter, Route, Routes } from "react-router-dom";
import { HomeSection } from "@components/homeSection";
import userEvent from "@testing-library/user-event";

describe("<CommingSoon />", () => {
   it("should render the component correctly", () => {
      render(<CommingSoon />, { wrapper: BrowserRouter });
      const title = screen.getByRole("heading", {
         name: /Em Breve: Novidades Estão Chegando!/i,
      });
      expect(title).toBeInTheDocument();
   });

   it("should render the image correctly", () => {
      render(<CommingSoon />, { wrapper: BrowserRouter });
      const image = screen.getByRole("img");
      expect(image).toHaveAttribute("src", correctImage);
   });

   it("should render the text correctly", () => {
      render(<CommingSoon />, { wrapper: BrowserRouter });
      const text = document.querySelectorAll(".text");
      expect(text).toMatchSnapshot();
   });

   it("should return to home page when clicked on the 'return' link", async () => {
      render(
         <MemoryRouter initialEntries={["/comming-soon"]}>
            <Routes>
               <Route path="/comming-soon" element={<CommingSoon />} />
               <Route path="/" element={<HomeSection />} />
            </Routes>
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
