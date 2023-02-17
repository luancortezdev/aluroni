// ** JSON
import opcoes from './opcoes.json';

// ** Hooks
import { useState } from 'react';

// ** ClassNames
import classNames from 'classnames';

// ** Icons
import { MdKeyboardArrowUp, MdKeyboardArrowDown } from 'react-icons/md';

// ** Types
import { Dispatch, SetStateAction } from 'react';

// ** Estilo
import styles from './Ordenador.module.scss';

export type OpcoesOrdenador = '' | 'porcao' | 'qtd_pessoas' | 'preco';

interface IOrdenador {
  ordenador: OpcoesOrdenador;
  setOrdenador: Dispatch<SetStateAction<OpcoesOrdenador>>;
}

export default function Ordenador({ ordenador, setOrdenador }: IOrdenador) {
  const [aberto, setAberto] = useState(false);
  const nomeOrdenador = ordenador && opcoes.find(opcao => opcao.value === ordenador)?.nome;
  return (
    <button
      className={classNames({
        [styles.ordenador]: true,
        [styles['ordenador--ativo']]: ordenador !== ''
      })}
      onClick={() => setAberto(!aberto)}
      onBlur={() => setAberto(false)}
    >
      <span>{nomeOrdenador || 'Ordenar Por'}</span>
      {aberto ? <MdKeyboardArrowUp size={20} /> : <MdKeyboardArrowDown size={20} />}
      <div className={classNames({
        [styles.ordenador__options]: true,
        [styles['ordenador__options--ativo']]: aberto
      })}>
        {opcoes.map(opcao => (
          <div className={styles.ordenador__option} key={opcao.value} onClick={() => setOrdenador(opcao.value as OpcoesOrdenador)}>
            {opcao.nome}
          </div>
        ))}
      </div>
    </button>
  );
}