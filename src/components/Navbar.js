import icon from '../img/icon.png'
import styles from './Navbar.module.css'
import { useRef } from 'react'
import { Link } from 'react-router-dom'

export default function Navbar(props){

    let valorDigitado = useRef('')

    async function passarDados(){
        let valorTratado = (valorDigitado.current.value).split(" ").join("+")
        await localStorage.setItem('resultado', valorTratado)
        props.renderizarPagina()
    }    

    return(
        <>
            <div className={styles.divComponentes}>
                <div className={styles.iconeTitulo}>
                <Link to="/"><img src={icon} alt="Ícone do site - Um círculo com um claquete"/></Link>
                <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}><h1>Buscador de Filmes</h1></Link>
                </div>
                <div>
                    <input className={styles.inputDados} ref={valorDigitado}/>
                    <Link to="/ResultadoBusca"><button className={styles.btnSubmit} onClick={passarDados}>Buscar</button></Link>
                </div>
            </div>
        </>
    )
}