import { useState, useEffect } from 'react'

export default () => {
    const [results, setResults] = useState([])
    const [errorMsg, setErrorMsg] = useState(null)

    const searchApi = async () => {
        try{
            const responce = await yelp.get('/search', {
                params: {
                    limit: 50,
                    term,
                    location: 'san jose'
                }
            })
            setResults(responce.data.businesses)
            setErrorMsg(null)
        }catch(err){
            setErrorMsg("Sorry! Some thing went wrong will fix immidiately")
        }
    }

    useEffect(() => {
        searchApi("")
    },[])

    return [results, errorMsg, searchApi]
}