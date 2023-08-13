import { styled } from "styled-components"

export default function Cat({gato}){

    const { nome, idade, genero, fotoperfil } = gato

    return(
        <Container>
            <ImageContainer>
                <img src={fotoperfil} alt="" />
            </ImageContainer>
            <TextContainer>
                <p>Nome: {nome}</p>
                <p>Idade: {idade >= 12? (idade/12).toFixed(1) : idade} {idade >= 12? "anos" : "meses"}</p>
                <p>Gênero: {genero}</p>
            </TextContainer>
        </Container>
    )
}

const Container = styled.div`
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
    img{
        width: 100%;
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
`