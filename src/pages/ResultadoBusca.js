
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import styles from './Main.module.css'
import { useEffect, useState } from 'react'

export default function ResultadoBusca() {

    const [resultado, setResultado] = useState([])
    const [validador, setValidador] = useState(0)
    let API_KEY = process.env.REACT_APP_TMDB_API_KEY
    let recuperarBusca = localStorage.getItem('resultado')

    useEffect(() => {
        esperarAPI()
    },[validador])

    function esperarAPI(){
        fetch(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${recuperarBusca}`)
          .then(resposta => resposta.json())
          .then(dados => setResultado(dados.results))
    }

    function renderizarPagina(){
        setValidador(validador + 1)
    }
  
    return (
        <>
            <Navbar renderizarPagina={renderizarPagina}/>
            <div className={styles.containerNativo}>
                <h1>Resultado da busca</h1>
                <div className={styles.containerAjuste}>
                    {resultado.map((item, index) =>
                        <div className={styles.card} key={index}>
                            <img src={`https://image.tmdb.org/t/p/w200/${item.poster_path}`} alt="Poster do filme"/>
                            <p>{item.title}</p>
                            <Link to="/detalhes"><button className={styles.btn}>VER MAIS</button></Link>
                        </div>
                    )}
                </div>
            </div>
        </>
    )
} 