import { BrowserRouter } from "react-router-dom"
import { Header } from "."
import { render, screen } from "@testing-library/react"

describe('<Header />', () => {
    it('should render the title of header', () => {
        const { getByText } = render(
            <BrowserRouter>
                <Header />
            </BrowserRouter>
        )
        const title = getByText(/Cirurgiã Dentista e Terapeuta Integrativa/i);
        expect(title).toBeInTheDocument();
    })

    it("should render the name 'Luana Vasconcellos Alvarenga'", () => {
        render(
            <BrowserRouter>
                <Header />
            </BrowserRouter>
        );

        const nameElement = screen.getByText("Luana Vasconcellos Alvarenga");
        expect(nameElement).toBeInTheDocument();
    });
})