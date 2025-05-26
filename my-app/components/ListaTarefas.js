import React, { useState } from 'react';
import {
  SafeAreaView,
  Text,
  TextInput,
  Button,
  StyleSheet,
  View,
  FlatList,
} from 'react-native';

// Componente para exibir a lista de tarefas
function ListaTarefas({ lista }) {
  return (
    <FlatList
      data={lista}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <View style={styles.item}>
          <Text style={styles.textoItem}>📝 {item.nome}</Text>
        </View>
      )}
    />
  );
}

export default function App() {
  const [tarefa, setTarefa] = useState('');
  const [lista, setLista] = useState([]);

  const adicionarTarefa = () => {
    if (tarefa.trim() === '') return;

    const novaTarefa = {
      id: Date.now().toString(),
      nome: tarefa,
    };

    setLista([...lista, novaTarefa]);
    setTarefa('');
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.titulo}>🗓️ Afazeres do Dia</Text>

      <TextInput
        style={styles.input}
        placeholder="O que precisa ser feito?"
        value={tarefa}
        onChangeText={setTarefa}
      />

      <Button title="Adicionar Tarefa" onPress={adicionarTarefa} color="#4CAF50" />

      <ListaTarefas lista={lista} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAFAFA',
    paddingTop: 50,
    paddingHorizontal: 20,
  },
  titulo: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#333',
  },
  input: {
    borderColor: '#999',
    borderWidth: 1,
    padding: 10,
    borderRadius: 6,
    marginBottom: 12,
    backgroundColor: '#FFF',
  },
  item: {
    backgroundColor: '#E8F5E9',
    padding: 12,
    marginVertical: 4,
    borderRadius: 5,
  },
  textoItem: {
    fontSize: 16,
    color: '#2E7D32',
  },
});