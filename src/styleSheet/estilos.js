import { StyleSheet } from 'react-native';

const estilos = StyleSheet.create({
  fundo: {
    flex: 1,
    backgroundColor: '#dddddd',
    paddingTop: 30,
    paddingHorizontal: 10,
  },

  cabecalho: {
    backgroundColor: '#a00000',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    alignItems: 'center',
    paddingVertical: 15,
  },

  cabTitulo: {
    fontSize: 18,
    color: '#ffffff',
    fontWeight: 'bold',
    marginBottom: 10,
  },

  cabImagem: {
    width: 110,
    height: 110,
    resizeMode: 'contain',
    marginBottom: 10,
  },

  cabSubtitulo: {
    fontSize: 26,
    color: '#ffffff',
    fontWeight: 'bold',
  },

  conteudo: {
    flex: 1,
    backgroundColor: '#ffffff',
  },

  rodape: {
    backgroundColor: '#a00000',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 12,
  },

  rodAutor: {
    color: 'yellow',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default estilos;