import { NavBarProvider } from "@contexts/navBarContext"
import { AppRouter } from "./pages/appRouter"

export const App = () => {
  return (
    <>
      <NavBarProvider>
        <AppRouter />
      </NavBarProvider>
    </>
  )
}
