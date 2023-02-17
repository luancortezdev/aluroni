// ** Componentes
import Buscador from './Buscador';
import Filtros from './Filtros';
import Ordenador, { OpcoesOrdenador } from './Ordenador';
import Itens from './Itens';

// ** Hooks
import { useState } from 'react';

// ** Estilos
import styles from './Cardapio.module.scss';
import stylesTema from 'styles/Tema.module.scss'

export default function Cardapio() {
  const [busca, setBusca] = useState('');
  const [filtro, setFiltro] = useState<number | null>(null);
  const [ordenador, setOrdenador] = useState<OpcoesOrdenador>('');
  return (
    <section className={styles.cardapio}>
      <h3 className={stylesTema.titulo}>Cardápio</h3>
      <Buscador busca={busca} setBusca={setBusca} />
      <div className={styles.cardapio__filtros}>
        <Filtros filtro={filtro} setFiltro={setFiltro} />
        <Ordenador ordenador={ordenador} setOrdenador={setOrdenador} />
      </div>
      <Itens busca={busca} filtro={filtro} ordenador={ordenador} />
    </section>
  );
}
