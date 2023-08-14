import { BrowserRouter, Route, Routes } from "react-router-dom"
import GlobalStyleCss from "./style/globalStyle"
import ResetCss from "./style/reset"
import LoginPage from "./pages/LoginPage"
import SignUpPage from "./pages/SignUpPage"
import { UserContextProvider } from "./context/AuthContext"
import HomePage from "./pages/HomePage"
import NewCat from "./pages/NewCat"
import MyCats from "./pages/MyCats"
import CatPage from "./pages/CatPage"
import TelaInicial from "./pages/TelaInicial"
import MyCatPage from "./pages/MyCatPage"


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
          <Route path="/gatos/:id" element={<CatPage/>}/>
          <Route path="/gatos/me" element={<MyCats/>}/>
          <Route path="/gatos/new" element={<NewCat/>}/>
          <Route path="/" element={<TelaInicial/>}/>
          <Route path="/gatos/me/:id" element={<MyCatPage/>}/>
        </Routes>
      </UserContextProvider>
    </BrowserRouter>
  )
}

export default App
