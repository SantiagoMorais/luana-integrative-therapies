import { fireEvent, render, screen } from "@testing-library/react";
import { FAQs } from ".";

describe("<FAQs />", () => {
   it("should render the component correctly", () => {
      render(<FAQs />);
      const title = screen.getByText(/Perguntas Frequentes/i);
      expect(title).toBeInTheDocument();
   });

   it("should render the all the questions correctly", () => {
      render(<FAQs />);
      const faqs = screen.getAllByRole("listitem");
      expect(faqs).toHaveLength(5);
   });

   it("should add a new className to the corresponding answer when your faq is clicked", () => {
      render(<FAQs />);
      const faq = screen.getAllByTestId("question");
      const answer = screen.getAllByTestId("answer");

      expect(answer[0]).toBeInTheDocument();
      expect(answer[0].classList.contains("selected")).toBeFalsy();
      expect(answer[1].classList.contains("selected")).toBeFalsy();

      fireEvent.click(faq[0]);
      expect(answer[0].classList.contains("selected")).toBeTruthy();
      expect(answer[1].classList.contains("selected")).toBeFalsy();
   });

   it("should remove the className 'selected' to the answer when the correspondig faq is clicked twice", () => {
      render(<FAQs />);
      const faq = screen.getAllByTestId("question");
      const answer = screen.getAllByTestId("answer");

      fireEvent.click(faq[0]);
      expect(answer[0].classList.contains("selected")).toBeTruthy();

      fireEvent.click(faq[0]);
      expect(answer[0].classList.contains("selected")).toBeFalsy();
   });

   it("should remove the className 'selected' to the current selected FAQ when another question is clicked", () => {
      render(<FAQs />);
      const faq = screen.getAllByTestId("question");
      const answer = screen.getAllByTestId("answer");

      fireEvent.click(faq[0]);
      expect(answer[0].classList.contains("selected")).toBeTruthy();
      fireEvent.click(faq[1]);
      expect(answer[0].classList.contains("selected")).toBeFalsy();
   });
});
