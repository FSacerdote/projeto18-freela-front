import { styled } from "styled-components"
import logo from "../assets/logo.png"
import { useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"
import { AuthContext } from "../context/AuthContext"

export default function LoginPage() {

    const navigate = useNavigate()
    const {setToken} = AuthContext
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    function entrar(event) {
        event.preventDefault()
        if (password.length < 3) return alert("A senha deve ter pelo menos 3 digitos")
        axios.post(`${import.meta.env.VITE_API_URL}/signup`, {email, password})
            .then((resposta)=>{
                localStorage.setItem("token", resposta.data.token)
                setToken(resposta.data.token)
                navigate("/home")
            })
            .catch((error)=>{
                if(error.response.status === 404) return alert("usuário inválido")
                if(error.response.status === 401) return alert("Senha inválida, tente novamente")
                alert("Erro ao realizar o login, tente novamente mais tarde ou consulte o suporte tecnico")
            })
    }

    return (
        <Page>
            <img src={logo} alt="Logo" />
            <p>LOGIN</p>
            <Container>
                <Form onSubmit={entrar}>
                    <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required/>
                    <input type="password" placeholder="Senha" value={password} onChange={(e) => setPassword(e.target.value)} required/>
                    <button>Entrar</button>
                    <h1>Primeira vez? Cadastre-se!</h1>
                </Form>
            </Container>
        </Page>
    )
}

const Page = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    p{
        margin-top: 230px;
        z-index: 1;
        font-family: 'Righteous', cursive;
        font-size: 30px;
        color: black;
    }
    img{
        width: 300px;
        position: fixed;
        z-index: 0;
        top: -30px;
    }
`

const Container = styled.div`
    z-index: 1;
    margin-top: 20px;
    width: 80%;
    height: 300px;
    border-radius: 15px;
    background-color: white;
    display: flex;
    flex-direction: column;
    border: 2px solid #e5B448;
    align-items: center;
`

const Form = styled.form`
    margin-top: 50px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    font-family: 'Raleway', sans-serif;
    input{
        font-family: 'Raleway', sans-serif;
        font-weight: 400;
        padding-left: 10px;
        width: 80%;
        height: 40px;
        border-radius: 8px;
        border: none;
        background:#F7e37c;
    }
    button{
        font-family: 'Raleway', sans-serif;
        font-weight: 700;
        width: 80%;
        height: 40px;
        background-color: #F3D863;
        border-radius: 8px;
        border: none;
        &:hover{
            filter: brightness(0.9);
        }
    }
    h1{
        margin-top: 20px;
        z-index: 1;
        font-weight: 700;
        font-size: 17px;
        color: black;
    }
`