import { styled } from "styled-components"
import Footer from "../components/Footer"
import Header from "../components/Header"
import { UserContext } from "../context/AuthContext"
import axios from "axios"
import { useContext, useEffect, useState } from "react"
import {GiCat} from "react-icons/gi"
import MyCat from "../components/MyCat"

export default function MyCats(){

    const [gatos, setGatos] = useState([])
    const {token} = useContext(UserContext)
    const [contador, setContador] = useState(0)

    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }

    useEffect(()=>{
        axios.get(`${import.meta.env.VITE_API_URL}/me/gatos`, config)
            .then((resposta)=>{
                setGatos(resposta.data)
            })
            .catch((error)=>console.log(error.response))
    }, [contador])

    if(gatos.length === 0){
        return(
            <Page>
                <Header></Header>
                    <p>Nenhum gatinho por aqui ainda</p>
                    <GiCat color="#4d4d4d" size="100px"/>
                <Footer></Footer>
            </Page>
        )
    }

    return(
        <Page>
            <Header></Header>
                <CatContainer>
                    {gatos?.map((gato)=><MyCat key={gato.id} gato={gato} contador={contador} setContador={setContador}/>)}
                </CatContainer>
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
    padding-top: 65px;
    padding-bottom: 65px;
    p{
        font-family: 'Righteous', cursive;
        font-weight: 400;
        color: #4d4d4d;
    }
    justify-content: center;
`

const CatContainer = styled.div`
    height: 100%;
    width: 90%;
    border-radius: 15px;
    background-color: #F3D863;
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow: scroll;
`