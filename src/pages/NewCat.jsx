import { styled } from "styled-components"
import logo from "../assets/logoSemFundo.png"
import { useContext, useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"
import Footer from "../components/Footer"
import { UserContext } from "../context/AuthContext"

export default function NewCat() {

    const navigate = useNavigate()
    const { token } = useContext(UserContext)
    const [nome, setNome] = useState("")
    const [idade, setIdade] = useState("")
    const [genero, setGenero] = useState("")
    const [fotoperfil, setFotoPerfil] = useState("")
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }

    function cadastrar (){
        if(idade < 1) return alert("A idade deve ser maior que 0")
        axios.post(`${import.meta.env.VITE_API_URL}/gatos`, {nome, idade, genero, fotoperfil}, config)
    }

    return (
        <Page>
            <Header>
                <img src={logo} alt="logo" />
                <p>Novo Miaudelo</p>
            </Header>
            <Container>
                <Form onSubmit={cadastrar}>
                    <input type="text" placeholder="Nome" value={nome} onChange={(e) => setNome(e.target.value)} required />
                    <input type="number" placeholder="Idade (em meses)" value={idade} onChange={(e) => setIdade(e.target.value)} required />
                    <input type="text" placeholder="Genero" value={genero} onChange={(e) => setGenero(e.target.value)} required />
                    <input type="text" placeholder="Foto de Perfil" value={fotoperfil} onChange={(e) => setFotoPerfil(e.target.value)} required />
                    <button>Cadastrar Miaudelo</button>
                </Form>
            </Container>
            <Footer></Footer>
        </Page>
    )
}

const Page = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
`

const Header = styled.div`
    width: 80%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    p{
        font-family: 'Righteous', cursive;
        font-size: 30px;
        color: black;
    }
    img{

        width: 200px;
    }
`

const Container = styled.div`
    margin-top: 10px;
    min-height: 50%;
    width: 80%;
    border-radius: 15px;
    background-color: white;
    display: flex;
    flex-direction: column;
    border: 2px solid #e5B448;
    align-items: center;
    margin-bottom: 100px;
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