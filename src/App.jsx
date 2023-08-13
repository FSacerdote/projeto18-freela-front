import { BrowserRouter, Route, Routes } from "react-router-dom"
import GlobalStyleCss from "./style/globalStyle"
import ResetCss from "./style/reset"
import LoginPage from "./pages/LoginPage"
import SignUpPage from "./pages/SignUpPage"
import { UserContextProvider } from "./context/AuthContext"
import HomePage from "./pages/HomePage"
import NewCat from "./pages/NewCat"


function App() {

  return (
    <BrowserRouter>
      <ResetCss/>
      <GlobalStyleCss/>
      <UserContextProvider>
        <Routes>
          <Route path="/login" element={<LoginPage/>}/>
          <Route path="/cadastro" element={<SignUpPage/>}/>
          <Route path="/home" element={<HomePage/>}/>
          <Route path="/gatos/:id"/>
          <Route path="/gatos/me"/>
          <Route path="/gatos/new" element={<NewCat/>}/>
        </Routes>
      </UserContextProvider>
    </BrowserRouter>
  )
}

export default App
