import React from 'react';
import { View, Text, Image } from 'react-native';

function ItemConteudo(props) {
  return (
    <View
      style={{
        backgroundColor: props.corFundo,
        marginTop: 10,
        width: '100%',
        minHeight: 130,
        padding: 10,
        borderTopRightRadius: 20,
      }}
    >
      <Image
        source={props.bandeira}
        style={{ width: 60, height: 40, resizeMode: 'contain', marginBottom: 8 }}
      />

      <Text style={{ color: props.corTexto, fontSize: 24, fontWeight: 'bold' }}>
        {props.nomePais}
      </Text>

      <Text style={{ color: props.corTexto, fontSize: 16 }}>
        Habitantes: {props.habitantes}
      </Text>

      <Text style={{ color: props.corTexto, fontSize: 16 }}>
        PIB: {props.pib}
      </Text>
    </View>
  );
}

export default ItemConteudo;