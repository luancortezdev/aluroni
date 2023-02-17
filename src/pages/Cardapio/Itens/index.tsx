// ** JSON
import cardapio from 'data/cardapio.json';

// ** Componente
import Item from './Item';

// ** Estilo
import styles from './Itens.module.scss';

// ** Hooks
import { useState, useEffect } from 'react';

// ** Types
import { Cardapio } from 'types/Prato';

interface Props {
  busca: string,
  filtro: number | null,
  ordenador: string
}

export default function Itens({ busca, filtro, ordenador }: Props) {
  const [lista, setLista] = useState(cardapio);
  // const { busca, filtro, ordenador } = props;

  function testaBusca(title: string) {
    const regex = new RegExp(busca, 'i');
    return regex.test(title);
  }

  function testaFiltro(id: number) {
    if (filtro !== null) return filtro === id;
    return true;
  }

  const ordenarPropriedadeCrescente = (lista: Cardapio, propriedade: 'size' | 'serving' | 'price') => {
    return lista.sort((a, b) => (a[propriedade] > b[propriedade] ? 1 : -1))
  }

  const ordenar = (novaLista: Cardapio) => {
    switch (ordenador) {
      case 'porcao':
        return ordenarPropriedadeCrescente(novaLista, 'size');
      case 'qtd_pessoas':
        return ordenarPropriedadeCrescente(novaLista, 'serving');
      case 'preco':
        return ordenarPropriedadeCrescente(novaLista, 'price');
      default:
        return novaLista;
    }
  };

  useEffect(() => {
    const novaLista = cardapio.filter(item => testaBusca(item.title) && testaFiltro(item.category.id));
    setLista(ordenar(novaLista));
  }, [busca, filtro, ordenador]);
  return (
    <div className={styles.itens}>
      {lista.map(item => (
        // {...item} está passando tudo que tem em item como prop pro componente Item
        <Item key={item.id} {...item} />
      ))}
    </div>
  );
}
