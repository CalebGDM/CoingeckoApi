import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'

const coinItem = (props) => {
    const { coin } = props
    return (
        <View style={styles.containerItem}>
            <View style={styles.coinNames}>
                <Image
                    style={styles.image}
                    source={{ uri: coin.image }}
                />
                <View style={styles.names}>
                    <Text style={styles.text}>{coin.name}</Text>
                    <Text style={styles.textSymbol}>{coin.symbol}</Text>
                </View>
                
            </View>

            <View>
                <Text style={styles.textPrice}>$ {coin.current_price}</Text>
                <Text style={[styles.pricePercentage, coin.price_change_percentage_24h > 0 ? styles.priceUp : styles.priceDown]}>{coin.price_change_percentage_24h}</Text>
            </View>
            
        </View>
    )
}

export default coinItem

const styles = StyleSheet.create({
    containerItem: {
        backgroundColor: '#121212',
        paddingTop: 10,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    coinNames:{
    flexDirection: 'row'
    },
    text: {
        color: '#ffffff'
    },
    image: {
        width: 30,
        height: 30,
        
    },
    textSymbol:{
        color: '#434343',
        textTransform: 'uppercase'
    },
    names:{
        marginLeft: 10,
    },
    pricePercentage:{
        textAlign: 'right'
    },
    priceUp:{
        color: '#00B5B9',
    },
    priceDown:{
        color: '#Fc2432'
    },
    textPrice:{
        color: '#ffffff',
        textAlign: 'right'
    }
})
