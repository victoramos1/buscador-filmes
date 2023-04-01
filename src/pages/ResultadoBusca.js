
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import styles from './Main.module.css'
import { useEffect, useState } from 'react'

export default function Main(){

    const [resultadoBusca, setResultadoBusca] = useState([])

    useEffect(()=>{
        let valor = JSON.parse(localStorage.getItem('resultado'))
        setResultadoBusca(valor)
    })

    return(
        <>
            <Navbar/>
                <div className={styles.containerNativo}>      
                    <h1>Resultado da busca</h1>
                    <div className={styles.containerAjuste}>
                        {resultadoBusca.map((item, index)=>
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