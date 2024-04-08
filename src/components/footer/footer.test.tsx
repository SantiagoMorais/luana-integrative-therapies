import { render, screen } from "@testing-library/react";
import { Footer } from "./index";

describe("<Footer />", () => {
    it('should render the component correctly', () => {
        render(<Footer />);
        const title = screen.getByText(/Me encontre nas minhas mídias sociais/i)
        expect(title).toBeInTheDocument();
    })

    it('should the buttons have the correct url to the corresponding button', () => {
        render(<Footer />);
        const social = screen.getByRole("list");
        expect(social).toMatchSnapshot();
    });
});