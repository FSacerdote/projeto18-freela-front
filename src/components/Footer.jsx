import { styled } from "styled-components"
import { AiFillHome } from "react-icons/ai"
import {BsFillGearFill} from "react-icons/bs"
import {BiPlus} from "react-icons/bi"
import { useNavigate } from "react-router-dom"

export default function Footer (){

    const navigate = useNavigate()

    return(
        <Container>
            <AiFillHome onClick={()=>navigate("/home")} color="white" size="30px"/>
            <BsFillGearFill onClick={()=>navigate("/gatos/me")} color="white" size="30px"/>
            <BiPlus onClick={()=>navigate("/gatos/new")} color="white" size="30px"/>
        </Container>
    )
}

const Container = styled.div`
    position: fixed;
    bottom: 0;
    z-index: 1;
    height: 60px;
    width: 100%;
    background-color: #F3D863;
    display: flex;
    align-items: center;
    justify-content: space-around;
`

