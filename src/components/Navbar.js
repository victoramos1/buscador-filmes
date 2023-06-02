import icon from '../img/icon.png'
import './Navbar.css'
import { useRef } from 'react'
import { Link } from 'react-router-dom'

function Navbar(props) {

  let valorDigitado = useRef('')

  function trataValorDigitado() {
    let valorTratado = (valorDigitado.current.value).split(" ").join("+")
    passaDados(valorTratado)
  }

  async function passaDados(valorTratado) {
    await localStorage.setItem('resultado', valorTratado)
    props.renderizaPagina()
  }

  return (
    <>
      <div className="divComponentes">
        <div className="iconeTitulo">
          <Link to="/"><img src={icon} alt="Ícone do site - Um círculo com um claquete" /></Link>
          <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}><h1>Buscador de Filmes</h1></Link>
        </div>
        <div>
          <input className="inputDados" ref={valorDigitado} />
          <Link to="/ResultadoBusca"><button className="btnSubmit" onClick={trataValorDigitado}>Buscar</button></Link>
        </div>
      </div>
    </>
  )
}

export default Navbar