import React, {useState, useEffect} from 'react'
import { View, Text, StyleSheet, ScrollView } from 'react-native'
import SearchBar from '../components/SearchBar'
import yelp from '../api/yelp'
import ResultList from '../components/ResultsList'
// import UseResults from '../hooks/UseResults'
// import UseResults from '../hooks/UseResults'

const SearchScreen = () => {
    //declarations
    const [term, setTerm] = useState('')
    const [results, setResults] = useState([])
    const [errorMsg, setErrorMsg] = useState(null)

    // functions
    const expendigBudget = (price) => {
        return results.filter(el => el.price === price)
    }

    const searchApi = async () => {
        try{
            const responce = await yelp.get('/search', {
                params: {
                    limit: 50,
                    term,
                    location: 'new york'
                }
            })
            setResults(responce.data.businesses)
            setErrorMsg(null)
        }catch(err){
            setErrorMsg("Sorry! Some thing went wrong will fix immidiately")
            setResults([])
        }
    }
    // hooks
    useEffect(() => {
        searchApi("")
    },[])

    ///jsx
    return (
        <View style={{ flex:1 }}>
            <SearchBar term={term} onTermChange={(val) => {
                setTerm(val)
                // console.log(term)
                }} onTermSubmit = {() => {searchApi()}}

            />
            {
                errorMsg ? <Text>{errorMsg}</Text> : null
            }
            <ScrollView style={style.container}>
                <ResultList title="Cheap" results={expendigBudget('$')} />
                <ResultList title="Classy" results={expendigBudget('$$')} />
                <ResultList title="Ellegant" results={expendigBudget('$$$')} />
                <ResultList title="Imperiall" results={expendigBudget('$$$$')} />
            </ScrollView>


        </View>
    )
}

const style = StyleSheet.create({
    resultList:{
        // marginVertical: 10,
        marginHorizontal: 5
    },
    container:{
        paddingBottom: 500
    }
})

export default SearchScreen