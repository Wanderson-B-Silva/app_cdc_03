import React from 'react';
import { ScrollView } from 'react-native';
import estilos from './styleSheet/estilos';
import ItemConteudo from './ItemConteudo';

function Conteudo() {
  const paises = [
    {
      nomePais: 'Brasil',
      bandeira: require('../img/brasil.png'),
      habitantes: '203 milhões',
      pib: 'US$ 2,17 trilhões',
      corFundo: 'green',
      corTexto: 'yellow',
    },
    {
      nomePais: 'Japão',
      bandeira: require('../img/japao.png'),
      habitantes: '124 milhões',
      pib: 'US$ 4,21 trilhões',
      corFundo: 'white',
      corTexto: 'red',
    },
    {
      nomePais: 'Portugal',
      bandeira: require('../img/portugal.png'),
      habitantes: '10,4 milhões',
      pib: 'US$ 287 bilhões',
      corFundo: 'darkgreen',
      corTexto: 'white',
    },
  ];

  return (
    <ScrollView style={estilos.conteudo}>
      {paises.map((item, index) => (
        <ItemConteudo
          key={index}
          nomePais={item.nomePais}
          bandeira={item.bandeira}
          habitantes={item.habitantes}
          pib={item.pib}
          corFundo={item.corFundo}
          corTexto={item.corTexto}
        />
      ))}
    </ScrollView>
  );
}

export default Conteudo;