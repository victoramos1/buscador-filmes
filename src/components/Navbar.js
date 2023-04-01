import icon from '../img/icon.png'
import styles from './Navbar.module.css'
import { useRef } from 'react'
import { Link } from 'react-router-dom'

export default function Navbar(){

    const API_KEY = process.env.REACT_APP_TMDB_API_KEY
    let valorDigitado = useRef('')
    let valorCaptado = valorDigitado.current.value
    
    function buscar(){

        let valorTratado = valorCaptado.split(" ").join("+")

        fetch(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${valorTratado}`).then(
        resposta => resposta.json()
        ).then(
            dados => localStorage.setItem('resultado', JSON.stringify(dados.results))
        )
    }    

    return(
        <>
            <div className={styles.divComponentes}>
                <div className={styles.iconeTitulo}>
                    <img src={icon} alt="Ícone do site - Um círculo com um claquete"/>
                    <h1>Buscador de Filmes</h1>
                </div>
                <div>
                    <input className={styles.inputDados} ref={valorDigitado}/>
                    <Link to="/ResultadoBusca"><button className={styles.btnSubmit} onClick={buscar}>Buscar</button></Link>
                </div>
            </div>
        </>
    )
}