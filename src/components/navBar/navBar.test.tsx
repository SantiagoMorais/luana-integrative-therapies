import { render } from "@testing-library/react"
import { NavBar } from "."

describe('<NavBar />', () => {
    it('should render the links of navigation bar', () => {
        const { getAllByRole } = render(<NavBar />)
        const links = getAllByRole("listitem");
        expect(links).toHaveLength(5);
    })
})