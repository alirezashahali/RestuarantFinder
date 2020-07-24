import React from 'react'
import { View, Text, StyleSheet, TextInput } from 'react-native'
import { Feather } from '@expo/vector-icons'


const SearchBar = ({term, onTermChange, onTermSubmit}) => {
    return (
        <View style={style.backgroundStyle} >
            <Feather name="search" style={style.iconStyle} />
            <TextInput autoCapitalize="none" autoCorrect={false}
                placeholder="Search" style={style.textInput}
                value={term} onChangeText={(val) => onTermChange(val)}
                onEndEditing={onTermSubmit}
            />
        </View>
    )
}

const style = StyleSheet.create({
    backgroundStyle:{
        backgroundColor: '#F0EEEE',
        height: 50,
        borderRadius: 5,
        marginVertical: 10,
        padding: 5,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    textInput:{
        flex: 1,
        // padding: 5
    },
    iconStyle:{
        fontSize:30,
        alignSelf: "center",
        marginLeft: 5,
        marginRight: 15
    }
})

export default SearchBar