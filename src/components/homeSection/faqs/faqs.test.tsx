import { screen } from "@testing-library/react";
import { FAQs } from ".";
import { renderWithProviders } from "@utils/functions";

describe("<FAQs />", () => {
   it("should render the component correctly", () => {
      renderWithProviders(<FAQs />);
      const title = screen.getByText(/Perguntas Frequentes/i);
      expect(title).toBeInTheDocument();
   });

   it("should render the all the questions correctly", () => {
      renderWithProviders(<FAQs />);
      const faqs = screen.getAllByRole("listitem");
      expect(faqs).toHaveLength(5);
   });
});
