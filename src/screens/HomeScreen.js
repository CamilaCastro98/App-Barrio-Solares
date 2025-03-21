import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, FlatList } from 'react-native';

const HomeScreen = () => {
  const initialSponsors = ['Patrocinador 1', 'Patrocinador 2', 'Patrocinador 3', 'Patrocinador 4', 'Patrocinador 5'];

  const [sponsors, setSponsors] = useState(initialSponsors);

  const renderItem = ({ item, index }) => (
    <View
      style={[
        styles.sponsorContainer,
        index % 2 === 1 && index === sponsors.length - 1 ? styles.lastSponsor : null  // Aplica solo al último elemento impar
      ]}
    >
      <Image
        source={require('../../assets/sponsorTemporal.png')}
        style={{ width: 100, height: 100 }}
        resizeMode="contain"
      />
      <Text style={styles.text}>{item}</Text>
    </View>
  );

  return (
    <>
      <View>
        <Image
          source={require('../../assets/logo.png')}
          style={{ width: 100, height: 100 }}
          resizeMode="contain"
        />
        <Text>SPONSORS OFICIALES</Text>
      </View>

      <View style={styles.container}>
        <FlatList
          data={sponsors}
          keyExtractor={(item, index) => index.toString()}
          renderItem={renderItem}
          numColumns={2}
          contentContainerStyle={{ flexWrap: 'wrap' }}
        />
      </View>

      <Text>¡IMPOSIBLE ES NADA!</Text>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display:'flex',
    alignItems:'center',
    backgroundColor: 'green',
  },
  sponsorContainer: {
    alignItems: 'center',
    marginBottom: 20,
    marginHorizontal: 10,
    backgroundColor: 'red',
    justifyContent: 'center',
  },
  lastSponsor: {
    width: '100%',
  },
  text: {
    fontSize: 20,
    color: '#333',
  },
});

export default HomeScreen;

