import { BrowserRouter, Route, Routes } from "react-router-dom"
import GlobalStyleCss from "./style/globalStyle"
import ResetCss from "./style/reset"
import LoginPage from "./pages/LoginPage"


function App() {

  return (
    <BrowserRouter>
      <ResetCss/>
      <GlobalStyleCss/>
      <Routes>
        <Route path="/login" element={<LoginPage/>}/>
        <Route path="/cadastro"/>
        <Route path="/home"/>
        <Route path="/gatos/:id"/>
        <Route path="/gatos/me"/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
