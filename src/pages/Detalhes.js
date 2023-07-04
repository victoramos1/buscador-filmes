import { useParams } from "react-router-dom"
import Navbar from "../components/Navbar"
import styles from "./Detalhes.module.css"
import { useEffect, useState } from "react"

export default function Detalhes() {

  let { id } = useParams()
  const API_KEY = process.env.REACT_APP_TMDB_API_KEY
  const [detalheFilme, setDetalheFilme] = useState(true)

  function pesquisaDetalhes() {
    fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=pt-BR`)
      .then(resposta => resposta.json())
      .then(dados => setDetalheFilme(dados))
  }

  useEffect(() => {
    pesquisaDetalhes()
  }, [])

  if (detalheFilme === true) {
    return (
      <>
        <Navbar />
        <div className="semRetorno">
          <h1>Carregando</h1>
        </div>
      </>
    )
  }

  return (
    <div className={styles.containerNativo}>
      <Navbar />
      <div className={styles.card}>
        <div className={styles.divImagem}>
          <img src={`https://image.tmdb.org/t/p/w500/${detalheFilme.poster_path}`} alt="Foto da capa do filme" />
        </div>
        <div className={styles.divInformacoes}>
          <h1>{detalheFilme.title}</h1>
          <h4>Nota TMDB: {detalheFilme.vote_average === 0 ? "Sem avaliações" : `${detalheFilme.vote_average} / 10`}</h4>
          <h4>Custo: {detalheFilme.budget === 0 ? "Custo não divulgado" : `U$ ${detalheFilme.budget.toLocaleString()}`}</h4>
          <h4>Bilheteria: {detalheFilme.revenue === 0 ? "Sem informações" : `U$ ${detalheFilme.revenue.toLocaleString()}`}</h4>
          <p>Sinopse: {detalheFilme.overview === "" ? "Sem informações" : `${detalheFilme.overview}`}</p>
        </div>
      </div>
    </div>
  )
}
