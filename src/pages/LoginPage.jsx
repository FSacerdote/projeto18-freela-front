import { styled } from "styled-components"
import logo from "../assets/logo.png"
import axios from "axios"
import { UserContext } from "../context/AuthContext"
import { useNavigate } from "react-router-dom"
import { useContext, useState } from "react"
import Swal from 'sweetalert2'
import 'sweetalert2/dist/sweetalert2.min.css';

export default function LoginPage() {

    const navigate = useNavigate()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const { setToken } = useContext(UserContext)

    function entrar(event) {
        event.preventDefault()
        axios.post(`${import.meta.env.VITE_API_URL}/signin`, { email, password })
            .then((resposta) => {
                localStorage.setItem("token", resposta.data.token)
                setToken(resposta.data.token)
                navigate("/home")
            })
            .catch((error) => {
                console.log(error)
                if (error.response.status === 404) return Swal.fire({
                    title: 'Erro!',
                    text: 'Esse email não está cadastrado',
                    icon: 'error',
                    confirmButtonText: 'Continuar'
                  })
                if (error.response.status === 401) return Swal.fire({
                    title: 'Erro!',
                    text: 'Senha incorreta, tente novamente',
                    icon: 'error',
                    confirmButtonText: 'Continuar'
                  })
                Swal.fire({
                    title: 'Erro!',
                    text: 'Erro ao realizar o login, tente novamente mais tarde ou consulte o suporte tecnico',
                    icon: 'error',
                    confirmButtonText: 'Continuar'
                })
            })
    }

    return (
        <Page>
            <img src={logo} alt="Logo" />
            <p>LOGIN</p>
            <Container>
                <Form onSubmit={entrar}>
                    <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                    <input type="password" placeholder="Senha" value={password} onChange={(e) => setPassword(e.target.value)} required />
                    <button>Entrar</button>
                    <h1 onClick={() => navigate("/cadastro")}>Primeira vez? Cadastre-se!</h1>
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