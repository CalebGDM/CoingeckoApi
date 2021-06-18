//import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, FlatList, StatusBar, TextInput } from 'react-native';
import CoinItem from './components/coinItem'

export default function App() {

  const [coins, setCoins] = useState([])
  const [search, setSearch] = useState('')
  const [refreshing, setRefreshing] = useState(false)

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
      <View style={styles.headerContainer}>
            <Text style={styles.title}>KriptoTracker</Text>
            <TextInput 
            style={styles.searchInput}
            placeholder='Search a Coin'
            placeholderTextColor='#858585'
            onChangeText={(text) => setSearch(text)}
            />
      </View>
      
      <View style={styles.list}>
        <FlatList
          data={
            coins.filter((coin) => 
            coin.name.toLowerCase().includes(search.toLowerCase()) || 
            coin.symbol.toLowerCase().includes(search.toLocaleLowerCase())
            )           
          }
          renderItem={({ item }) => {
            return <CoinItem coin={item} />
          }}
          refreshing={refreshing}
          showsVerticalScrollIndicator={false}
          onRefresh={async() => {
            setRefreshing(true)
            await loadData();
            setRefreshing(false)
          }}
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
    //justifyContent: 'center',
  },
  list: {

    width: '90%',
    paddingTop: 50
  },
  headerContainer:{
        position: 'absolute',
        top: 10,
        //zIndex: 100,
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '90%',
        marginBottom: 10
       
    },
    title:{
        color: '#ffffff',
        fontSize: 20
    },
    searchInput:{
        color: '#ffffff',
        borderBottomColor: '#4657CE',
        borderBottomWidth: 2,
        width: '40%',
        textAlign: 'center'
    } 
});
