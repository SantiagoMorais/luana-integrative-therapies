import { AppRoutes } from "./pages/appRoutes"
import { EquilibriumTopicsProvider } from "@contexts/equilibriumTopicContext"
import { CaroulselProvider } from "@contexts/caroulselContext"

export const App = () => {
  return (
    <>
      <EquilibriumTopicsProvider>
        <CaroulselProvider>
          <AppRoutes />
        </CaroulselProvider>
      </EquilibriumTopicsProvider>
    </>
  )
}
