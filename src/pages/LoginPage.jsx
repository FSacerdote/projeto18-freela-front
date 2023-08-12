import { styled } from "styled-components"
import logo from "../assets/logo.png"
import gato from "../assets/gato.png"

export default function LoginPage(){
    return(
        <Page>
            <img src={logo} alt="Logo" />
            <p>LOGIN</p>
            <Container>
                <Form>
                    <input type="email" placeholder="Email"/>
                    <input type="password" placeholder="Senha"/>
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
    font-weight: 400;
    input{
        padding-left: 10px;
        width: 80%;
        height: 40px;
        border-radius: 8px;
        border: none;
        background:#F7e37c;
    }
    button{
        width: 80%;
        height: 40px;
        background-color: #F3D863;
        border-radius: 8px;
        border: none;
    }
    h1{
        margin-top: 20px;
        z-index: 1;
        font-weight: 700;
        font-size: 17px;
        color: black;
    }
`