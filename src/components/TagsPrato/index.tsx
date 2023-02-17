// ** Types
import { Prato } from 'types/Prato'

// ** Estilos
import classNames from 'classnames'
import styles from './TagsPrato.module.scss'

export const TagsPrato = ({ category, size, price, serving }: Prato) => {
  return (
    <div className={styles.tags}>
      <div className={classNames(
        styles.tags__tipo,
        styles[`tags__tipo__${category.label.toLowerCase()}`]
      )}>{category.label}</div>
      <div className={styles.tags__porcao}>
        {size}g
      </div>
      <div className={styles.tags__qtdpessoas}>
        {serving} pessoa{serving === 1 ? '' : 's'}
      </div>
      <div className={styles.tags__valor}>
        R$ {price.toFixed(2)}
      </div>
    </div>
  )
}
