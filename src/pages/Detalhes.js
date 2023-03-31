import Navbar from "../components/Navbar"
import styles from "./Detalhes.module.css"

export default function Detalhes(){
    return(
        <div className={styles.containerNativo}>
            <Navbar/>
            <div className={styles.card}>
                <div className={styles.divImagem}>
                    <img src="https://m.media-amazon.com/images/I/914oHftat8L.jpg" alt="Foto da capa do filme"/>
                </div>
                <div className={styles.divInformacoes}>
                    <h1>O Lobo de Wall Street</h1>
                    <h4>Direção: Martin Scorsese</h4>
                    <h4>Popularidade: 4.7/5</h4>
                    <h4>Custo: U$ 100.000.000,00</h4>
                    <h4>Bilheteria: U$ 300.000.000,00</h4>
                    <p>Sinopse: Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum harum, officiis reiciendis tenetur mollitia excepturi nulla nisi veniam, possimus itaque in accusantium omnis reprehenderit voluptatum. Quos pariatur laudantium non sapiente.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam totam in corporis dolorum ratione eveniet nam expedita. Placeat sed molestiae libero facere amet, provident recusandae vero repudiandae, unde ipsum corporis.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum harum, officiis reiciendis tenetur mollitia excepturi nulla nisi veniam, possimus itaque in accusantium omnis reprehenderit voluptatum. Quos pariatur laudantium non sapiente.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam totam in corporis dolorum ratione eveniet nam expedita. Placeat sed molestiae libero facere amet, provident recusandae vero repudiandae, unde ipsum corporis.
                    </p>
                </div>
            </div>
        </div>
    )
}