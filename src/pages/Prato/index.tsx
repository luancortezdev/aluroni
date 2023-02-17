// ** JSON
import cardapio from 'data/cardapio.json'

// ** Hooks
import { useNavigate, useParams } from "react-router-dom"

// ** Páginas
import PaginaNaoEncontrada from "pages/PaginaNaoEncontrada"

// ** Componentes
import { TagsPrato } from "components/TagsPrato"
import Header from "components/Header"
import { Route, Routes } from "react-router-dom"

// ** Estilos
import styles from './Prato.module.scss'

export const Prato = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const prato = cardapio.find((item) => item.id === Number(id))
  if (!prato) {
    return <PaginaNaoEncontrada />;
  }
  return (
    <Routes>
      <Route path="*" element={<Header />}>
        <Route index element={
          <>
            <button className={styles.voltar} onClick={() => (
              navigate(-1)
            )}>
              {'< Voltar'}
            </button>
            <section className={styles.container}>
              <h1 className={styles.titulo}>
                {prato.title}
              </h1>
              <div className={styles.imagem}>
                <img src={prato.photo} alt={prato.title} />
              </div>
              <div className={styles.conteudo}>
                <p className={styles.conteudo__descricao}>
                  {prato.description}
                </p>
                <TagsPrato {...prato} />
              </div>
            </section>
          </>
        } />
      </Route>
    </Routes>
  );
}
