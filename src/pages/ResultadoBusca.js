
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import semImagem from '../img/sem-imagem.jpg'
import './Main.css'

export default function ResultadoBusca() {

  const [resultado, setResultado] = useState(true)
  const [validador, setValidador] = useState(0)
  let API_KEY = process.env.REACT_APP_TMDB_API_KEY
  let recuperaBusca = localStorage.getItem('resultado')

  async function consultaAPI() {
    await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${recuperaBusca}&language=pt-BR`)
      .then(resposta => resposta.json())
      .then(dados => setResultado(dados.results))
  }

  useEffect(() => {
    consultaAPI()
  }, [validador])

  function renderizaPagina() {
    setValidador(validador + 1)
  }

  if (resultado === true) {
    return (
      <>
        <Navbar renderizaPagina={renderizaPagina}/>
        <div className="semRetorno">
          <h1>Carregando</h1>
        </div>
      </>
    )
  }

  if (resultado.length > 0) {
    return (
      <>
        <Navbar renderizaPagina={renderizaPagina}/>
        <div className="containerNativo">
          <h1>Resultado da busca</h1>
          <div className="containerAjuste">
            {resultado.map((item, index) =>
              <div className="card" key={index}>
                {item.poster_path ? <img className="poster" src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`} alt="Poster do filme" /> : <img src={semImagem} alt="Sem imagem" />}
                <p>{item.title}</p>
                <Link to={`/detalhes/${item.id}`}><button className="btn">VER MAIS</button></Link>
              </div>
            )}
          </div>
        </div>
      </>
    )
  } else {
    return (
      <>
        <Navbar renderizaPagina={renderizaPagina}/>
        <div className="semRetorno">
          <h1>Sem resultado</h1>
        </div>
      </>
    )
  }
} 