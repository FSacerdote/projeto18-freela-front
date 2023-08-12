import { styled } from "styled-components"

export default function Cat(){
    return(
        <Container>
            <ImageContainer>
                <img src="https://conteudo.imguol.com.br/c/entretenimento/36/2022/05/22/gata-tricolor-gato-gatos-1653265224214_v2_3x4.jpg" alt="" />
            </ImageContainer>
            <TextContainer>
                <p>Nome: Fulaninho</p>
                <p>Idade: 3 meses</p>
                <p>Gênero: Macho</p>
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