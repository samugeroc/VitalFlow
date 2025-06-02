import FormsLista from '@/components/FormularioLista';
import ListaCompras from '@/components/ListaTarefas';
import React, { useState } from 'react';
import { SafeAreaView, StatusBar, StyleSheet, Text, View } from 'react-native';
 
type Item = {
  nome: string;
  valor: string;
};
 
export default function ExploreScreen() {
  const [itens, setItens] = useState<Item[]>([]);
 
  const adicionarItem = (novoItem: Item) => {
    if (novoItem.nome.trim() !== '' && novoItem.valor.trim() !== '') {
      setItens([...itens, novoItem]);
    }
  };
 
  const removerItem = (index: number) => {
    setItens(itens.filter((_, i) => i !== index));
  };
 
  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="dark-content" backgroundColor="#F7F7F7" />
      <View style={styles.container}>
        <Text style={styles.header}>Lista de Compras</Text>
        <FormsLista adicionarItem={adicionarItem} />
        <View style={styles.divider} />
        <ListaCompras itens={itens} removerItem={removerItem} />
      </View>
    </SafeAreaView>
  );
}
 
const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#F7F7F7',
  },
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#F7F7F7',
  },
  header: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#2D2D2D',
    marginBottom: 20,
    alignSelf: 'center',
    letterSpacing: 1,
  },
  divider: {
    height: 1,
    backgroundColor: '#E0E0E0',
    marginVertical: 18,
    borderRadius: 2,
  },
});