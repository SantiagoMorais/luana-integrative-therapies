import { NavBarProvider } from "@contexts/navBarContext"
import { AppRoutes } from "./pages/appRoutes"

export const App = () => {
  return (
    <>
      <NavBarProvider>
        <AppRoutes />
      </NavBarProvider>
    </>
  )
}
