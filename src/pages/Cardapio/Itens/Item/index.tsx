// ** Componente
import { TagsPrato } from 'components/TagsPrato';

// ** Hooks
import { useNavigate } from 'react-router-dom';

// ** Types
import { Prato } from 'types/Prato';

// ** Estilo
import styles from './Item.module.scss';

export default function Item(props: Prato) {
  const { id, title, description, photo } = props;
  const navigate = useNavigate()
  return (
    <div className={styles.item} onClick={() => navigate(`/prato/${id}`)}>
      <div className={styles.item__imagem}>
        <img src={photo} alt={title} />
      </div>
      <div className={styles.item__descricao}>
        <div className={styles.item__titulo}>
          <h2> {title} </h2>
          <p> {description} </p>
        </div>
        <TagsPrato {...props} />
      </div>
    </div>
  );
}
