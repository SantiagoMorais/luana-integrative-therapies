import { BrowserRouter, Location } from "react-router-dom";
import { render } from "@testing-library/react";
import { ThemeProvider } from "@contexts/themeContext";

export const locationName = (location: Location) => {
   return location.pathname.slice(1).split("/")[0];
};

export const renderWithProviders = (ui: React.ReactElement) => {
   return render(
      <BrowserRouter>
         <ThemeProvider>{ui}</ThemeProvider>
      </BrowserRouter>
   );
};
