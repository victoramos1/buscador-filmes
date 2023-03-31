
import { useEffect, useState } from 'react'
import styles from './Main.module.css'

export default function Main(){

        const [filmes, setFilmes] = useState([])

        const API_KEY = process.env.REACT_APP_TMDB_API_KEY

        useEffect(()=>{

            fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`).then(
            resposta => resposta.json()).then(
                dados => setFilmes(dados.results))
        })
        
        let resultadoBusca = []
        resultadoBusca = filmes

    return(
        <div className={styles.containerNativo}>      
            <h1>Filmes populares hoje no The Movie Database</h1>
            <div className={styles.containerAjuste}>
            {resultadoBusca.map((item, index)=>
                <div className={styles.card} key={index}>
                    <img src={`https://image.tmdb.org/t/p/w200/${item.poster_path}`} alt="Poster do filme"/>
                    <p>{item.title}</p>
                    <button className={styles.btn}>VER MAIS</button>
                </div>
            )}
            </div>
        </div>
    )
} 