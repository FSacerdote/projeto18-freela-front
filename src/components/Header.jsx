import { BiSearch } from "react-icons/bi"
import { styled } from "styled-components"

export default function Header (){
    return(
        <Container>
            <BiSearch color="white" size="30px"/>
            <input type="text" />
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    top: 0;
    z-index: 1;
    height: 60px;
    width: 100%;
    background-color: #F3D863;
`