import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

export default function ConsumptionList() {
  // Objeto de datos de consumo
  const consumptionData = [
    { name: 'Food', amount: 150.25 },
    { name: 'Transport', amount: 50.75 },
    { name: 'Entertainment', amount: 120.00 },
    { name: 'Housing', amount: 600.00 },
  ];

  // Suma total de los montos
  const totalSum = consumptionData.reduce((sum, item) => sum + item.amount, 0);

  return (
    <View style={styles.container}>
      <ScrollView style={styles.listContainer}>
        <Text style={styles.title}>Lista de Consumo:</Text>
        {consumptionData.map((item, index) => (
          <View key={index} style={styles.item}>
            <Text style={styles.itemText}>Nombre: {item.name}</Text>
            <Text style={styles.itemText}>Monto: ${item.amount.toFixed(2)}</Text>
          </View>
        ))}
      </ScrollView>
      <Text style={styles.total}>Suma total de montos: ${totalSum.toFixed(2)}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  listContainer: {
    marginBottom: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  item: {
    marginBottom: 10,
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  itemText: {
    fontSize: 16,
  },
  total: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
  },
});
