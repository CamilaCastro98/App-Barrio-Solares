import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, FlatList } from 'react-native';
import { Button, Menu, Divider, Provider } from "react-native-paper";
import tw from "tailwind-react-native-classnames";

const HomeScreen = () => {
  const initialSponsors = ['Patrocinador 1', 'Patrocinador 2', 'Patrocinador 3', 'Patrocinador 4', 'Patrocinador 5'];

  const [sponsors, setSponsors] = useState(initialSponsors);
  const [menuVisible, setMenuVisible] = useState(false);

  const renderItem = ({ item, index }) => (
    <View
      style={[
        styles.sponsorContainer,
        index % 2 === 1 && index === sponsors.length - 1 ? styles.lastSponsor : null
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
    <Provider>
      <View style={styles.header}>
        {/* Menú desplegable */}
        <Menu
          visible={menuVisible}
          onDismiss={() => setMenuVisible(false)}
          anchor={
            <Button onPress={() => setMenuVisible(true)} style={tw`mr-4`}>
              ☰
            </Button>
          }
        >
          <Menu.Item onPress={() => console.log("Inicio")} title="Inicio" />
          <Menu.Item onPress={() => console.log("Perfil")} title="Perfil" />
          <Divider />
          <Menu.Item onPress={() => console.log("Cerrar sesión")} title="Cerrar sesión" />
        </Menu>

        {/* Logo */}
        <Image
          source={require('../../assets/logo.png')}
          style={{ width: 100, height: 100 }}
          resizeMode="contain"
        />
      </View>

      <Text style={styles.title}>SPONSORS OFICIALES</Text>

      <View style={styles.container}>
        <FlatList
          data={sponsors}
          keyExtractor={(item, index) => index.toString()}
          renderItem={renderItem}
          numColumns={2}
          contentContainerStyle={{ flexWrap: 'wrap' }}
        />
      </View>

      <Text style={styles.footer}>¡IMPOSIBLE ES NADA!</Text>
    </Provider>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 16,
  },
  container: {
    flex: 1,
    alignItems: 'center',
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
  title: {
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  footer: {
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 'bold',
    marginVertical: 20,
  },
});

export default HomeScreen;
