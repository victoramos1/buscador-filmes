import { useParams } from "react-router-dom"
import Navbar from "../components/Navbar"
import styles from "./Detalhes.module.css"
import { useEffect, useState } from "react"

export default function Detalhes(){

    let { id } = useParams()
    const API_KEY = process.env.REACT_APP_TMDB_API_KEY
    const [detalheFilme, setDetalheFilme] = useState('')

    useEffect(()=>{
        recuperarDetalhes()
    }, [])

    function recuperarDetalhes(){
        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`)
            .then(resposta => resposta.json())
            .then(dados => setDetalheFilme(dados))    
    }

    return(
        <div className={styles.containerNativo}>
            <Navbar/>
            <div className={styles.card}>
                <div className={styles.divImagem}>
                    <img src={`https://image.tmdb.org/t/p/w500/${detalheFilme.poster_path}`} alt="Foto da capa do filme"/>
                </div>
                <div className={styles.divInformacoes}>
                    <h1>{detalheFilme.title}</h1>
                    <h4>Nota TMDB: {detalheFilme.vote_average} / 10</h4>
                    <h4>Custo: U$ {detalheFilme.budget}</h4>
                    <h4>Bilheteria: U$ {detalheFilme.revenue}</h4>
                    <p>Sinopse: {detalheFilme.overview}</p>
                </div>
            </div>
        </div>
    )
}