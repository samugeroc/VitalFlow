import React from 'react';
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
 
type Item = {
  nome: string;
  valor: string;
};
 
type ListaComprasProps = {
  itens: Item[];
  removerItem: (index: number) => void;
};
 
const ListaCompras: React.FC<ListaComprasProps> = ({ itens, removerItem }) => (
  <FlatList
    data={itens}
    keyExtractor={(_, index) => index.toString()}
    renderItem={({ item, index }) => (
      <View style={styles.itemContainer}>
        <View>
          <Text style={styles.itemText}>{item.nome}</Text>
          <Text style={styles.valorText}>Valor: R$ {item.valor}</Text>
        </View>
        <TouchableOpacity onPress={() => removerItem(index)}>
          <Text style={styles.removeButton}>Remover</Text>
        </TouchableOpacity>
      </View>
    )}
  />
);
 
const styles = StyleSheet.create({
  itemContainer: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 8 },
  itemText: { fontSize: 16 },
  valorText: { fontSize: 14, color: '#555' },
  removeButton: { color: 'red' },
});
 
export default ListaCompras;