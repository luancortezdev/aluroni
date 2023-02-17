// ** Imagens
import { ReactComponent as NotFoundImage } from 'assets/not_found.svg'

// ** ClassNames
import classNames from 'classnames'

// ** Hooks
import { useNavigate } from 'react-router-dom'

// ** Estilos
import styles from './PaginaNaoEncontrada.module.scss'
import stylesTema from 'styles/Tema.module.scss'

export default function PaginaNaoEncontrada() {
  const navigate = useNavigate()

  return (
    <div className={classNames({
      [styles.container]: true,
      [stylesTema.container]: true
    })}>
      <div className={styles.voltar}>
        <button onClick={() => (
          navigate(-1)
        )}>
          {'< Voltar'}
        </button>
      </div>
      <NotFoundImage />
    </div>
  )
}
