import { render, screen } from "@testing-library/react"
import correctImage from "@assets/imgs/Error404.jpg"
import { PageNotFound } from ".";
import { BrowserRouter, MemoryRouter, Route, Routes } from "react-router-dom";
import { HomeSection } from "@components/homeSection";
import userEvent from "@testing-library/user-event";

describe("<PageNotFound />", () => {
    it("should render the component correctly", () => {
        render(<PageNotFound />, {wrapper: BrowserRouter});
        const title = screen.getByRole("heading", {name: /Erro 404 - Página não encontrada/i});
        expect(title).toBeInTheDocument();
    })

    it("should render the image correctly", () => {
        render(<PageNotFound />, {wrapper: BrowserRouter});
        const image = screen.getByRole("img");
        expect(image).toHaveAttribute("src", correctImage);
    });

    it("should render the text correctly", () => {
        render(<PageNotFound />, {wrapper: BrowserRouter});
        const text = document.querySelectorAll(".text");
        expect(text).toMatchSnapshot();
    })

    it("should return to home page when clicked on the 'return' link", async () => {
        render(
            <MemoryRouter initialEntries={["/comming-soon"]}>
                <Routes>
                <Route path="*" element={<PageNotFound />}/>
                    <Route path="/" element={<HomeSection />}/>
                </Routes>
            </MemoryRouter>
        );
        const user = userEvent.setup();
        const returnLink = screen.getByRole("link", {name: /aqui/i})

        expect(returnLink).toBeInTheDocument();

        await user.click(returnLink);
        
        const slogan = screen.getByText(/Descubra uma jornada de cura e harmonia através de terapias integrativas./i);
        expect(slogan).toBeInTheDocument();
    })
})