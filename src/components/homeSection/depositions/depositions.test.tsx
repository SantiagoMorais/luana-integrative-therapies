import { render, screen } from "@testing-library/react"
import { Depositions } from "."
import data from "@json/index.json"

describe("<Depositions />", () => {
    it("should render the component correctly", () => {
        render(<Depositions />)
        const title = screen.getByText(/Depoimentos de pacientes/i)
        expect(title).toBeInTheDocument();
    })

    it("should render the number of depositions correctly", () => {
        render(<Depositions />)

        const depositions = document.querySelectorAll(".slide")
        const numberOfDepositions = data.depositions.length
        
        expect(depositions).toHaveLength(numberOfDepositions);
    })
})