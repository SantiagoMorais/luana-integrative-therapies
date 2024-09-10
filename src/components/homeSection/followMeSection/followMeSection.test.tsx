import { screen } from "@testing-library/react";
import { FollowMeSection } from ".";
import { instagramLink, whatsappLink } from "@utils/variables";
import followMeImage from "@assets/imgs/luanaImageWithoutBG-3.png";
import { renderWithProviders } from "@utils/functions";

describe("<FollowMeSection />", () => {
   it("should render the component correctly", () => {
      renderWithProviders(<FollowMeSection />);
      const title = screen.getByText(
         /Gostaria de conhecer um pouco mais sobre o mundo das terapias integrativas?/i
      );
      expect(title).toBeInTheDocument();
   });

   it("should render the instagram button correctly", () => {
      renderWithProviders(<FollowMeSection />);
      const instagramButton = screen.getByRole("link", { name: "Instagram" });

      expect(instagramButton).toBeInTheDocument();
      expect(instagramButton).toHaveAttribute("href", instagramLink);
      expect(instagramButton).toHaveAttribute("target", "_blank");

      const instagramButtonText = screen.getByText("Instagram");

      expect(instagramButtonText).toBeInTheDocument();
   });

   it("should render the schedule appointment button correctly", () => {
      renderWithProviders(<FollowMeSection />);
      const scheduleAppointmentButton = screen.getByRole("link", {
         name: "Agendar consulta",
      });

      expect(scheduleAppointmentButton).toBeInTheDocument();
      expect(scheduleAppointmentButton).toHaveAttribute("href", whatsappLink);
      expect(scheduleAppointmentButton).toHaveAttribute("target", "_blank");

      const scheduleAppointmentButtonText =
         screen.getByText("Agendar consulta");

      expect(scheduleAppointmentButtonText).toBeInTheDocument();
   });

   it("should render the instagram image correctly", () => {
      renderWithProviders(<FollowMeSection />);
      const instagramImage = screen.getByAltText("Siga-me no Instagram");
      expect(instagramImage).toBeInTheDocument();
      expect(instagramImage).toHaveAttribute("src", followMeImage);
   });

   it("should have the correct HTML structure", () => {
      renderWithProviders(<FollowMeSection />);
      const content = screen
         .getByText(
            /Gostaria de conhecer um pouco mais sobre o mundo das terapias integrativas?/i
         )
         .closest(".content");
      expect(content).toBeInTheDocument();

      const infoSections = screen.getAllByRole("heading", { level: 3 });
      expect(infoSections.length).toBe(2);

      const images = screen.getAllByRole("img");
      expect(images.length).toBe(3);
   });
});
