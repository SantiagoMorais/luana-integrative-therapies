import { screen } from "@testing-library/react";
import { WhatsAppButton } from ".";
import { renderWithProviders } from "@utils/functions";

describe("<WhatsAppButton />", () => {
   it("should render the component correctly", () => {
      renderWithProviders(<WhatsAppButton />);
      const buttonText = screen.getByText(/Fale conosco via WhatsApp/i);
      expect(buttonText).toBeInTheDocument();
   });
});
