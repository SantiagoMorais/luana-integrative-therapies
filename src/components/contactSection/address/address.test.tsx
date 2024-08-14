import { render, screen } from "@testing-library/react"
import { Address } from "."
import { googleMapsLink } from "@utils/variables";

describe("<Address />", () => {
    it("should render the comonent correctly", () => {
        render(<Address />);
        const title = screen.getByText(/Como chegar ao consultório/i);
        expect(title).toBeInTheDocument();
    });

    it("should the map image redirect the user to the correct page", () => {
        render(<Address />);
        const mapLink = document.querySelector(".seeLocation");
        expect(mapLink).toHaveAttribute("href", googleMapsLink)
    });
})