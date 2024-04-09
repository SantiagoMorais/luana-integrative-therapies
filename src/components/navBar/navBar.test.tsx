import { fireEvent, render, screen } from "@testing-library/react"
import { NavBar } from "."
import { NavBarProvider } from "@contexts/navBarContext"

describe('<NavBar />', () => {
    it('should render the links of navigation bar', () => {
        render(<NavBar />)
        const links = screen.getAllByRole("listitem");
        expect(links).toHaveLength(5);
    })

    it("should the home link have the className 'selected'", () => {
        render(
            <NavBarProvider>
                <NavBar />
            </ NavBarProvider>
        )

        const homeLink = screen.getByText(/home/i);
        const contactLink = screen.getByText(/contato/i)

        expect(homeLink.classList.contains('selected')).toBeTruthy();
        expect(contactLink.classList.contains('selected')).toBeFalsy();
    })

    it("should add the className 'selected' to a button when it's clicked", () => {
        render(
            <NavBarProvider>
                <NavBar />
            </ NavBarProvider>
        )
        const links = screen.getAllByRole("listitem");

        expect(links[1].classList.contains('selected')).toBeFalsy();

        fireEvent.click(links[1])
        expect(links[1].classList.contains('selected')).toBeTruthy();

        fireEvent.click(links[2])
        expect(links[2].classList.contains('selected')).toBeTruthy();
        expect(links[1].classList.contains('selected')).toBeFalsy();
    })
})

describe("<NavBar /> responsive layouts", () => {
    it("should the button receive the className 'clicked' when it's clicked", () => {
        render(<NavBar />)
        
        const button = screen.getByTestId("accordionButton")
        expect(button).toBeInTheDocument();

        expect(button.classList.contains("clicked")).toBeFalsy()
        fireEvent.click(button);
        expect(button.classList.contains("clicked")).toBeTruthy()
    })

    it("should the fontAwesomeIcon changes its icon attribute when the button is clicked", () => {
        render(<NavBar />)
        
        const button = screen.getByTestId("accordionButton")
        const icon = screen.getByTestId("hamburgerIcon")
        expect(icon).toHaveAttribute(`data-icon`, "bars");

        fireEvent.click(button);
        expect(icon).toHaveAttribute(`data-icon`, "xmark");
    })
})