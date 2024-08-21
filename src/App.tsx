import { NavBarProvider } from "@contexts/navBarContext"
import { AppRoutes } from "./pages/appRoutes"
import { EquilibriumTopicsProvider } from "@contexts/equilibriumTopicContext"

export const App = () => {
  return (
    <>
      <NavBarProvider>
        <EquilibriumTopicsProvider>
          <AppRoutes />
        </EquilibriumTopicsProvider>
      </NavBarProvider>
    </>
  )
}
