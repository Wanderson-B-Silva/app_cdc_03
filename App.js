import React from 'react';
import { View } from 'react-native';
import estilos from './src/styleSheet/estilos';

import Cabecalho from './src/Cabecalho';
import Conteudo from './src/Conteudo';
import Rodape from './src/Rodape';

function App() {
  const imagemCabecalho = require('./img/topo.png');

  return (
    <View style={estilos.fundo}>
      <Cabecalho
        titulo="FUNDAMENTOS II"
        subtitulo="DSV MOBILE"
        imagem={imagemCabecalho}
      />

      <Conteudo />

      <Rodape autor="Wanderson" data="09/04/2026" />
    </View>
  );
}

export default App;