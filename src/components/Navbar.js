import icon from '../img/icon.png'
import styles from './Navbar.module.css'

export default function Navbar(){
    return(
        <>
            <div className={styles.divComponentes}>
                <div className={styles.iconeTitulo}>
                    <img src={icon} alt="Ícone do site - Um círculo com um claquete"/>
                    <h1>Buscador de Filmes</h1>
                </div>
                <div>
                    <input className={styles.inputDados}/>
                    <button className={styles.btnSubmit}>Buscar</button>
                </div>
            </div>
        </>
    )
}