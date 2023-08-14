import axios from "axios"
import { styled } from "styled-components"
import { UserContext } from "../context/AuthContext"
import { useContext } from "react"
import { useNavigate } from "react-router-dom"

export default function MyCat({ gato, contador, setContador }) {

    const navigate = useNavigate()
    const { token } = useContext(UserContext)
    const { nome, disponibilidade, fotoperfil, id } = gato
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }

    function changeStatus(event) {
        event.stopPropagation()
        axios.patch(`${import.meta.env.VITE_API_URL}/gatos/${id}`, {}, config)
            .then(() => {
                setContador(contador + 1)
            })
            .catch((error) => console.log(error.response))
    }

    return (
        <Container onClick={()=>navigate(`/gatos/me/${id}`)}>
            <ImageContainer>
                <img src={fotoperfil} alt="" />
            </ImageContainer>
            <TextContainer backcolor={disponibilidade ? "red" : "green"} color={disponibilidade ? "green" : "red"}>
                <p>Nome: {nome}</p>
                <p>Status: <span>{disponibilidade ? "Ativo" : "De férias"}</span></p>
                <button onClick={changeStatus}>{disponibilidade ? "Desativar Miaudelo" : "Ativar Miaudelo"}</button>
            </TextContainer>
        </Container>
    )
}

const Container = styled.div`
z-index: 0;
    padding-left: 15px;
    overflow: hidden;
    display: flex;
    align-items: center;
    margin-top: 20px;
    min-height: 100px;
    width: 80%;
    border-radius: 20px;
    background-color: white;
    gap: 20px;
`

const ImageContainer = styled.div`
    overflow: hidden;
    height: 70px;
    width: 70px;
    border-radius: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    img{
        height: 100%;
    }
`
const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 5px;
    p{
        font-family: 'Righteous', cursive;
        font-weight: 400;
    }
    button{
        z-index: 1;
        height: 30px;
        width: 140px;
        border: none;
        background-color: ${(props) => props.backcolor};
        font-family: 'Righteous', cursive;
        font-weight: 400;
        color: white;
        border-radius: 5px;
    }
    span{
        color: ${(props) => props.color};
    }
`