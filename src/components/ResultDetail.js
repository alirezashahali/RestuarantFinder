import React from 'react'
import { Text, Image, View, StyleSheet } from 'react-native'

const ResultDetail = ({name, uri, rating, reviewCount}) => {
    // console.log(uri)
    return (
        <View style={style.resultDetail}>
            <Image style={style.image} source={{uri: uri}} />
            <Text style={{...style.name, width: 200}}>{name}</Text>
            <Text style={style.review}>{rating} stars, {reviewCount} reviews</Text>
        </View>
    )
}

const style = StyleSheet.create({
    image:{
        height: 100,
        width: 200,
        borderRadius: 4
    },
    name:{
        fontWeight: "bold"
    },
    resultDetail:{
        margin: 5
    },
    review:{
        fontSize: 12,
        color: "grey"
    }
})

export default ResultDetail