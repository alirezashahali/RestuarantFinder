import { useState, useEffect } from 'react'
import yelp from '../../api/yelp'

export const searchApi = async () => {
    try{
        console.log(term)
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
        // setErrorMsg("Sorry! Some thing went wrong will fix immidiately")
        console.log(err)
    }
}
