import { NavBarProvider } from "@contexts/navBarContext"
import { AppRoutes } from "./pages/appRoutes"
import { EquilibriumTopicsProvider } from "@contexts/equilibriumTopicContext"
import { CaroulselProvider } from "@contexts/caroulselContext"

export const App = () => {
  return (
    <>
      <NavBarProvider>
        <EquilibriumTopicsProvider>
          <CaroulselProvider>
            <AppRoutes />
          </CaroulselProvider>
        </EquilibriumTopicsProvider>
      </NavBarProvider>
    </>
  )
}
