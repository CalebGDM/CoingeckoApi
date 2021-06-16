import React, { useState } from 'react'
import { StyleSheet, Text, View, TextInput} from 'react-native'



const header = () => {

    const [search, setSearch] = useState('')

    return (
        <View style={styles.container}>
            <Text style={styles.title}>KryptoTracker</Text>
            <TextInput 
            style={styles.searchInput}
            placeholder='Search a Coin'
            placeholderTextColor='#858585'
            onChangeText={text => setSearch(text)}
            />
        </View>
    )
}

export default header


const styles = StyleSheet.create({
    container:{
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
})
