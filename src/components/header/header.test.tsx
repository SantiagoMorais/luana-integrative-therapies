import { Header } from "."
import { render, screen } from "@testing-library/react"

describe('<Header />', () => {
    it('should render the title of header', () => {
        const { getByText } = render(<Header />)
        const title = getByText(/Cirurgiã Dentista e Terapeuta Integrativa/i);
        expect(title).toBeInTheDocument();
    })

    it("should render the name 'Luana Vasconcellos Alvarenga'", () => {
        render(<Header />);
        
        const nameElement = screen.getByText("Luana Vasconcellos Alvarenga");
        expect(nameElement).toBeInTheDocument();
    });
})