import React from 'react'
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native'
import ResultDetail from '../components/ResultDetail'
import {withNavigation} from 'react-navigation'

const ResultsList = ({title, results, navigation}) => {
    // console.log(results)
    const renderItem = ({item}) => {
        // console.log(item)
        return(
            <TouchableOpacity onPress={()=>{navigation.navigate('OneRes', {id: item.id})}}>
                <ResultDetail style={style.result} name={item.name}
                    uri={item.image_url} rating={item.rating}
                    reviewCount={item.review_count}
                />
            </TouchableOpacity>
        )
    }
    if(results.length > 0){
        return(
            <View style={style.resultList}>
                <Text style={style.title} >{title}</Text>
                <Text style={style.subNumber}> {results.length} Restaurant</Text>
                <FlatList
                    showsHorizontalScrollIndicator={false}
                    data={results}
                    renderItem={(item) => renderItem(item)}
                    keyExtractor={item => item.alias}
                    horizontal={true}
                />
            </View>
        )
    }else{
        return null
    }
}

const style = StyleSheet.create({
    title:{
        fontSize: 18,
        fontWeight: "400",
        fontWeight: "bold",
        marginLeft: 5
    },
    subNumber:{
        fontSize: 8,
        fontWeight: "bold",
        marginLeft: 5,
        color: "grey"
    },
    result:{
        marginVertical: 20,
        marginHorizontal: 20
    },
    resultList:{
        marginVertical: 10,
        // marginHorizontal: 10
    }
})

export default withNavigation(ResultsList)