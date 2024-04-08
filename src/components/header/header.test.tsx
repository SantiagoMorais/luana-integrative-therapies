import { Header } from "."
import { render } from "@testing-library/react"

describe('<Header />', () => {
    it('should render the title of header', () => {
        const { getByText } = render(<Header />)
        const title = getByText(/Cirurgiã Dentista Especialista em Terapias Integrativas/i);
        expect(title).toBeInTheDocument();
    })
})