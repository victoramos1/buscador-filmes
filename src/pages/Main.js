import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import styles from './Main.module.css'

export default function Main() {

    const API_KEY = process.env.REACT_APP_TMDB_API_KEY
    const [filmes, setFilmes] = useState([])

    useEffect(() => {
        consultaAPI()
    }, [])

    function consultaAPI() {
        fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=pt-BR&page=1`)
            .then(resposta =>
                resposta.json())
            .then(dados => {
                setFilmes(dados.results)
            })
    }

    return (
        <>
            <Navbar/>
            <div className={styles.containerNativo}>
                <h1>Filmes populares hoje no The Movie Database</h1>
                <div className={styles.containerAjuste}>
                    {filmes.map((item, index) =>
                        <div className={styles.card} key={index}>
                            <img className={styles.poster} src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`} alt="Poster do filme" />
                            <p>{item.title}</p>
                            <Link to={`/detalhes/${item.id}`}><button className={styles.btn}>VER MAIS</button></Link>
                        </div>
                    )}
                </div>
            </div>

        </>
    )
} 