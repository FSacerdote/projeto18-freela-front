import axios from "axios"
import { useContext, useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { styled } from "styled-components"
import { UserContext } from "../context/AuthContext"
import Footer from "../components/Footer"
import Swal from 'sweetalert2'
import 'sweetalert2/dist/sweetalert2.min.css';

export default function MyCatPage() {
    const { id } = useParams()
    const { token } = useContext(UserContext)
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }
    const [gato, setGato] = useState({})
    const [nome, setNome] = useState("")
    const [idade, setIdade] = useState("")
    const [macho, setMacho] = useState(false)
    const [femea, setFemea] = useState(false)
    const [fotoperfil, setFoto] = useState("")
    const [contador, setContador] = useState(0)

    const navigate = useNavigate()

    useEffect(() => {
        axios.get(`${import.meta.env.VITE_API_URL}/gatos/${id}`, config)
            .then((resposta)=> {
                setGato(resposta.data)
                setNome(resposta.data.nome)
                setIdade(resposta.data.idade)
                setFoto(resposta.data.fotoperfil)
                setMacho(resposta.data.genero === "Macho"? true: false)
                setFemea(resposta.data.genero === "Fêmea"? true: false)
            })
            .catch((error)=>console.log(error))
    }, [contador])

    function edit(event){
        event.preventDefault()
        const genero = macho? "Macho": "Fêmea"
        if (idade < 1) return Swal.fire({
            title: 'Erro!',
            text: 'Idade deve ser maior que zero',
            icon: 'error',
            confirmButtonText: 'Continuar'
        })
        axios.put(`${import.meta.env.VITE_API_URL}/gatos/${id}`, {nome, idade, genero, fotoperfil}, config)
            .then(()=>{
                Swal.fire({
                    title: 'Sucesso!',
                    text: 'Miaudelo atualizado!',
                    icon: 'success',
                    confirmButtonText: 'Continuar'
                }).then(()=>setContador(contador + 1))
            })
            .catch((error)=>console.log(error.message))
    }

    function deleteMiau(){
        Swal.fire({
            title: 'Você tem certeza que deseja excluir o Miaudelo?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Sim',
            cancelButtonText: 'Não',
        }).then((result) =>{
            if(result.isConfirmed){
                axios.delete(`${import.meta.env.VITE_API_URL}/gatos/${id}`, config)
                    .then(()=>navigate("/home"))
                    .catch((error)=>console.log(error.message))
            }
        })
    }

    return (
        <Page>
            <ImageContainer>
                <img src={gato.fotoperfil} alt="" />
            </ImageContainer>
            <Img>
                <img src={gato.fotoperfil} alt="" />
            </Img>
            <TextContainer>
                <Form onSubmit={edit}>
                    <input type="text" placeholder="Nome" value={nome} onChange={(e) => setNome(e.target.value)} required />
                    <input type="number" placeholder="Idade (em meses)" value={idade} onChange={(e) => setIdade(e.target.value)} required />
                    <div>
                        <p>Genêro:</p>
                        <input type="checkbox" placeholder="Genero" checked={macho} onChange={() => {setMacho(true); setFemea(false)}}/>
                        <p>Macho</p>
                        <input type="checkbox" placeholder="Genero" checked={femea} onChange={() => {setMacho(false); setFemea(true)}}/>
                        <p>Fêmea</p>
                    </div>
                    <input type="text" placeholder="Foto de Perfil" value={fotoperfil} onChange={(e) => setFoto(e.target.value)} required />
                    <button>Salvar</button>
                </Form>
            </TextContainer>
            <Delete onClick={deleteMiau}>Excluir Miaudelo :(</Delete>
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
    overflow: scroll;
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
    top: 30px;
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
    margin-top: 40px;
    font-family: 'Raleway', sans-serif;
    font-weight: 700;
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 5px;
    width: 80%;
    height: 300px;
    border-radius: 15px;
    background-color: white;
    border: 2px solid #e5B448;
    justify-content: center;
`

const Form = styled.form`
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
            cursor: pointer;
        }
    }
    div{
        padding-right: 10px;
        padding-left: 10px;
        width: 80%;
        display: flex;
        align-items: center;
        height: 40px;
        border-radius: 8px;
        border: none;
        background:#F7e37c;
        p{
            font-family: 'Raleway', sans-serif;
            font-weight: 400;
        }
        input{
            height: 20px;
        }
    }
`

const Delete = styled.button`
    margin-top: 10px;
    height: 40px;
    width: 80%;
    border: none;
    background-color: red;
    border-radius: 8px;
    font-family: 'Raleway', sans-serif;
    font-weight: 700;
    color: white;
    font-size: 16px;
    &:hover{
        filter: brightness(0.9);
        cursor: pointer;
    }
`