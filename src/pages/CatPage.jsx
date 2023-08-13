import axios from "axios"
import { useContext, useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { styled } from "styled-components"
import { UserContext } from "../context/AuthContext"
import Footer from "../components/Footer"

export default function CatPage() {
    const { id } = useParams()
    const { token } = useContext(UserContext)
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }
    const [gato, setGato] = useState({})

    useEffect(() => {
        axios.get(`${import.meta.env.VITE_API_URL}/gatos/${id}`, config)
            .then((resposta)=> setGato(resposta.data))
            .catch((error)=>console.log(error))
    }, [])

    const { nome,genero, idade, telefone, email, nometutor} = gato

    return (
        <Page>
            <ImageContainer>
                <img src={gato.fotoperfil} alt="" />
            </ImageContainer>
            <Img>
                <img src={gato.fotoperfil} alt="" />
            </Img>
            <TextContainer>
                <p>Nome: {nome}</p>
                <p>Gênero: {genero}</p>
                <p>Idade: {idade >= 12? (idade/12).toFixed(1) : idade} {idade >= 12? "anos" : "meses"}</p>
                <h1>Informações de contato</h1>
                <p>Tutor: {nometutor}</p>
                <p>Email: {email}</p>
                <p>Telefone: {telefone}</p>
            </TextContainer>
            <Footer></Footer>
        </Page>
    )
}

const Page = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #F3D863;
    padding-bottom: 65px;
`

const ImageContainer = styled.div`
    filter: brightness(0.3);
    height: 200px;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    img{
        width: 100%;
    }
    width: 100%;
`
const Img = styled.div`
    position: fixed;
    top: 80px;
    overflow: hidden;
    height: 200px;
    width: 200px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 200px;
    border: 2px solid #F3D863;
    background-color: white;
    img{
        width: 100%;
    }
`

const TextContainer = styled.div`
    padding-left: 20px;
    margin-top: 120px;
    font-family: 'Raleway', sans-serif;
    font-weight: 700;
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 5px;
    h1{
        margin-top: 15px;
        margin-bottom: 2px;
    }
    width: 80%;
    height: 250px;
    border-radius: 15px;
    background-color: white;
    border: 2px solid #e5B448;
    justify-content: center;
`