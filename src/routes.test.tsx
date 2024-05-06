import { render, screen } from "@testing-library/react"
import { AppRoutes } from "pages/appRoutes"
import { App } from "App";
import userEvent from '@testing-library/user-event'


describe("Routes", () => {
    it("should render the default route", () => {
        render(<AppRoutes />)

        const slogan = screen.getByText(/Descubra uma jornada de cura e harmonia através de terapias integrativas./i);

        expect(slogan).toBeInTheDocument();
    })

    it("should render the <CommingSoon /> component when the route changes", async () => {
        render(<App />)
        const user = userEvent.setup()
        const equilibriumButton = screen.getByRole("link", {name: /equilibrium/i})

        await user.click(equilibriumButton);

        const commingSoonPage = screen.getByText(/Em Breve: Novidades Estão Chegando!/i)
        expect(commingSoonPage).toBeInTheDocument();
    })

    it("should render the <AboutMe /> component when the route changes", async () => {
        render(<App />);
        const user = userEvent.setup();
        const aboutMeButton = screen.getByRole("link", {name: /sobre mim/i});

        await user.click(aboutMeButton);
        const title = screen.getByRole("heading", {name: /sobre mim/i});
        expect(title).toBeInTheDocument();
    })
})