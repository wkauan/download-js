import { Route, BrowserRouter } from "react-router-dom";

import Page from "./components/page"

function App() {
  return (
    <>
      <BrowserRouter>
        <Route Component={ Page } path="/" exact />
      </BrowserRouter>
    </>
  )
}

export default App
