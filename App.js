//import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, FlatList, StatusBar } from 'react-native';
import CoinItem from './components/coinItem'
import Header from './components/header'
import search from './components/header'

export default function App() {

  const [coins, setCoins] = useState([])

  const loadData = async () => {
    const res = await fetch(
      'https://api.coingecko.com/api/v3/coins/markets?vs_currency=mxn&order=market_cap_desc&per_page=100&page=1&sparkline=false'
    );
    const data = await res.json()
    setCoins(data)
  }

  useEffect(() => {
    loadData()
  }, [])

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#141414" />
      <Header />
      <View style={styles.list}>
        <FlatList

          data={
            coins
          }
          renderItem={({ item }) => {
            return <CoinItem coin={item} />
          }}
          showsVerticalScrollIndicator={false}
        />
      </View>


    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#141414',
    alignItems: 'center',
    justifyContent: 'center',
  },
  list: {
    width: '90%',
    paddingTop: 50
  }
});
