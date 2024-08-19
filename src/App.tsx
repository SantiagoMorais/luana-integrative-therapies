import { NavBarProvider } from "@contexts/navBarContext"
import { AppRoutes } from "./pages/appRoutes"
import { CaroulselProvider } from "@contexts/caroulselContext"

export const App = () => {
  return (
    <>
      <NavBarProvider>
        <CaroulselProvider>
          <AppRoutes />
        </CaroulselProvider>
      </NavBarProvider>
    </>
  )
}
