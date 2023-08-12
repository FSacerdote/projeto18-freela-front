import { styled } from "styled-components"
import logo from "../assets/logoSemFundo.png"
import { useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"

export default function SignUpPage() {

    const navigate = useNavigate()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [nome, setNome] = useState("")
    const [telefone, setTelefone] = useState("")
    const [cpf, setCpf] = useState("")
    const [foto, setFoto] = useState("")
    const [confirmar, setConfirmar] = useState("")


    function cadastrar(event) {
        event.preventDefault()
        if (password.length < 3) return alert("A senha deve ter pelo menos 3 digitos")
        if (password !== confirmar) return alert("A confirmação de senha deve ser igual a senha")
        axios.post(`${import.meta.env.VITE_API_URL}/signup`, { nome, email, password, cpf, telefone, foto })
            .then(() => {
                navigate("/login")
            })
            .catch((error) => {
                if (error.response.status === 409) return alert("Email ou Cpf já cadastrados")
                if (error.response.status === 422) return alert("Erro no formato dos dados, tente novamente")
                alert("Erro ao realizar o cadastro, tente novamente mais tarde ou consulte o suporte tecnico")
            })
    }

    return (
        <Page>
            <Header>
                <img src={logo} alt="logo" />
                <p>CADASTRO</p>
            </Header>
            <Container>
                <Form onSubmit={cadastrar}>
                    <input type="text" placeholder="Nome" value={nome} onChange={(e) => setNome(e.target.value)} required />
                    <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                    <input type="password" placeholder="Senha" value={password} onChange={(e) => setPassword(e.target.value)} required />
                    <input type="password" placeholder="Confirmar senha" value={confirmar} onChange={(e) => setConfirmar(e.target.value)} required />
                    <input type="text" placeholder="Cpf" value={cpf} onChange={(e) => {
                        let value = e.target.value.replace(/\D/g, '')
                        if (value.length > 3) value = value.substring(0, 3) + '.' + value.substring(3)
                        if (value.length > 7) value = value.substring(0, 7) + '.' + value.substring(7)
                        if (value.length > 11) value = value.substring(0, 11) + '-' + value.substring(11, 13)
                        setCpf(value)
                    }} required />
                    <input type="text" placeholder="Telefone" value={telefone} onChange={(e) => {
                        let value = e.target.value.replace(/\D/g, '')
                        if (value.length > 2) value = '(' + value.substring(0, 2) + ') ' + value.substring(2)
                        if (value.length > 10) value = value.substring(0, 10) + '-' + value.substring(10, 14)
                        setTelefone(value)
                    }} required />
                    <input type="url" placeholder="Foto de perfil" value={foto} onChange={(e) => setFoto(e.target.value)} required />
                    <button>Criar Conta</button>
                    <h1 onClick={() => navigate("/login")}>Já é cadastrado? Faça Login!</h1>
                </Form>
            </Container>
        </Page>
    )
}

const Page = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const Header = styled.div`
    margin-top: 20px;
    width: 80%;
    display: flex;
    align-items: center;
    p{
        font-family: 'Righteous', cursive;
        font-size: 30px;
        color: black;
    }
    img{
        width: 100px;
    }
`

const Container = styled.div`
    height: 75%;
    width: 80%;
    border-radius: 15px;
    background-color: white;
    display: flex;
    flex-direction: column;
    border: 2px solid #e5B448;
    align-items: center;
`

const Form = styled.form`
    margin-top: 20px;
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
        margin-top: 10px;
        font-weight: 700;
        font-size: 17px;
        color: black;
    }
`