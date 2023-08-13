import { styled } from "styled-components"
import logo from "../assets/logoSemFundo.png"
import { useNavigate } from "react-router-dom"

export default function TelaInicial (){

    const navigate = useNavigate()

    return(
        <Page>
            <img src={logo} alt="logo" />
            <p>A melhor agência de Miaudelos do Brasil!</p>
            <button onClick={()=>navigate("/login")}>Começe Agora!</button>
        </Page>
    )
}

const Page = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;
    img{
        position: fixed;
        top: -50px;
        width: 400px;
    }
    button{
        font-family: 'Raleway', sans-serif;
        font-weight: 700;
        font-size: 20px;
        z-index: 2;
        height: 60px;
        width: 70%;
        margin-bottom: 50px;
        border: none;
        background-color: green;
        color: white;
        border-radius: 20px;
        &:hover{
            filter: brightness(0.7);
            cursor: pointer;
        }
    }
    p{
        text-align: center;
        font-family: 'Raleway', sans-serif;
        font-weight: 700;
        font-size: 30px;
        margin-bottom: 200px;
    }
`