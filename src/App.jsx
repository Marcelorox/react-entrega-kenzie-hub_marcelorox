import { RoutesMain } from "./routes"
import { ResetStyles } from './styles/reset'
import { GlobalStyles } from "./styles/globalStyles"

function App() {

  return (
    <>
      <ResetStyles/>
      <GlobalStyles/>
      <RoutesMain/>
    </>
  )
}

export default App
