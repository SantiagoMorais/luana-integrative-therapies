import { render, screen } from "@testing-library/react"
import { WhatsAppButton } from "."

describe("<WhatsAppButton />", () => {
    it("should render the component correctly", () => {
        render(<WhatsAppButton />);
        const buttonText = screen.getByText(/Fale conosco via WhatsApp/i);
        expect(buttonText).toBeInTheDocument();
    });
})