import { BrowserRouter, Route, Routes } from "react-router-dom"
import GlobalStyleCss from "./style/globalStyle"
import ResetCss from "./style/reset"
import LoginPage from "./pages/LoginPage"
import SignUpPage from "./pages/SignUpPage"
import { UserContextProvider } from "./context/AuthContext"


function App() {

  return (
    <BrowserRouter>
      <ResetCss/>
      <GlobalStyleCss/>
      <UserContextProvider>
        <Routes>
          <Route path="/login" element={<LoginPage/>}/>
          <Route path="/cadastro" element={<SignUpPage/>}/>
          <Route path="/home"/>
          <Route path="/gatos/:id"/>
          <Route path="/gatos/me"/>
        </Routes>
      </UserContextProvider>
    </BrowserRouter>
  )
}

export default App
