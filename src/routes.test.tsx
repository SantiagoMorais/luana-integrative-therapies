import { render, screen } from "@testing-library/react"
import { AppRoutes } from "pages/appRoutes"
import { App } from "App";
import userEvent from '@testing-library/user-event'
import { ApolloProvider } from "@apollo/client";
import { client } from "@utils/blogAPI";


describe("Routes", () => {
    it("should render the default route", () => {
        render(<AppRoutes />)

        const slogan = screen.getByText(/Descubra uma jornada de cura e harmonia através de terapias integrativas./i);

        expect(slogan).toBeInTheDocument();
    })

    it("should render the <EquilibriumSection /> component when the route changes", async () => {
        render(
            <ApolloProvider client={client}>
                <App />
            </ApolloProvider>
        )
        const user = userEvent.setup()
        const equilibriumButton = screen.getAllByRole("link", { name: /equilibrium/i })

        await user.click(equilibriumButton[0]);

        const equilibriumPage = screen.getByTestId(/equilibriumSection/i)
        expect(equilibriumPage).toBeInTheDocument();
    })

    it("should render the <AboutMe /> component when the route changes", async () => {
        render(
            <ApolloProvider client={client}>
                <App />
            </ApolloProvider>
        )
        const user = userEvent.setup();
        const aboutMeButton = screen.getAllByRole("link", { name: /sobre mim/i });

        await user.click(aboutMeButton[0]);
        const title = screen.getByRole("heading", { name: /sobre mim/i });
        expect(title).toBeInTheDocument();
    })
})