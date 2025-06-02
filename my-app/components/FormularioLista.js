import React, { useState } from 'react';
import { Alert, Button, StyleSheet, Text, TextInput, View } from 'react-native';
 
type Item = {
  nome: string;
  valor: string;
};
 
type FormsListaProps = {
  adicionarItem: (item: Item) => void;
};
 
const FormsLista: React.FC<FormsListaProps> = ({ adicionarItem }) => {
  const [nome, setNome] = useState('');
  const [valor, setValor] = useState('');
 
  // Permite apenas números e vírgula/ponto para decimal
  const handleValorChange = (text: string) => {
    // Substitui vírgula por ponto e remove caracteres não numéricos exceto ponto
    let sanitized = text.replace(/,/g, '.').replace(/[^0-9.]/g, '');
 
    // Garante apenas um ponto decimal
    const parts = sanitized.split('.');
    if (parts.length > 2) {
      sanitized = parts[0] + '.' + parts.slice(1).join('');
    }
 
    // Limita para duas casas decimais
    if (sanitized.includes('.')) {
      const [intPart, decPart] = sanitized.split('.');
      sanitized = intPart + '.' + (decPart ? decPart.slice(0, 2) : '');
    }
 
    setValor(sanitized);
  };
 
  const handleAdicionar = () => {
    // Validação: valor deve ser numérico e ter até duas casas decimais
    if (
      nome.trim() !== '' &&
      valor.trim() !== '' &&
      /^[0-9]+(\.[0-9]{1,2})?$/.test(valor)
    ) {
      adicionarItem({ nome, valor: Number(valor).toFixed(2) });
      setNome('');
      setValor('');
    } else {
      Alert.alert('Erro', 'Digite um valor numérico válido com até duas casas decimais.');
    }
  };
 
  return (
    <View>
      <Text style={styles.title}>Adicionar Item</Text>
      <TextInput
        style={styles.input}
        placeholder="Nome do item"
        value={nome}
        onChangeText={setNome}
      />
      <TextInput
        style={styles.input}
        placeholder="Valor"
        value={valor}
        onChangeText={handleValorChange}
        keyboardType="numeric"
        maxLength={10}
      />
      <Button title="Adicionar" onPress={handleAdicionar} />
    </View>
  );
};
 
const styles = StyleSheet.create({
  title: { fontSize: 20, fontWeight: 'bold', marginBottom: 8 },
  input: { borderWidth: 1, borderColor: '#ccc', padding: 8, marginBottom: 8, borderRadius: 4 },
});
 
export default FormsLista;