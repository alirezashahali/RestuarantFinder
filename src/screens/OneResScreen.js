import React, {useState, useEffect} from 'react'
import { View, Text, StyleSheet, FlatList, Image } from 'react-native'

import yelp from '../api/yelp'

const OneResScreen = ({navigation}) => {
    const id = navigation.getParam('id')
    const [result, setResult] = useState({})
    const [errMsg, setErrorMsg] = useState("")
    try{
        console.log(result.location.display_address)
    }catch(err){
    }

    /// LOGICS
    const renderImage = (item)=>{
        // console.log('item', item)
        return <Image style={style.images} source={{uri: item.item}} />
    }

    const searchApi = async () => {
        try{
            const responce = await yelp.get(`/${id}`)
            setResult(responce.data)
        }catch(err){
            console.log(err)
            setErrorMsg("sorry please try again later, it woll be fixed as soon as possible")
        }
    }

    useEffect(() => { searchApi() }, [])

    ///// JSX
    return (
        <View>
            <Text style={style.header}>{result.name}</Text>
            <FlatList horizontal data={result.photos} keyExtractor={(item) => item}
                renderItem={renderImage} showsHorizontalScrollIndicator={false}
            />
            <Text style={style.phone} >Phone Number: {result.phone}</Text>
            <Text style={{ margin: 10 }}>addresses:</Text>
            {
                result.location
                    ?
                    <FlatList data={result.location.display_address}
                        renderItem={(item) => <Text style={style.address}>{item.item}</Text>}
                    />
                    :
                    null
            }
            {
                errMsg.length > 0 ? <Text>{errMsg}</Text> : null
            }
        </View>
    )
}


//// STYLES
const style = StyleSheet.create({
    header:{
        fontSize: 18,
        margin: 10,
        fontWeight: "bold"
    },
    images:{
        width: 300,
        height: 200,
        margin: 10,
        borderRadius: 5,
    },
    phone:{
        color: "grey",
        margin: 10
    },
    address:{
        marginLeft: 100
    }
})

export default OneResScreen