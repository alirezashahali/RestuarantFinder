import axios from 'axios'

export default axios.create({
    baseURL: "https://api.yelp.com/v3/businesses",
    headers:{
        Authorization: 'Bearer b28LCmczkXiOldgcm4f0j8wbTDmicG9ZmN0M__owVBt8SJX5I9sNy3phbh4_eo0_sUqlpJywATfqf0tC6HTb-EHsBDbjjXSnyAkrwe-COMAYYeY8V5IX2vkqnC4ZX3Yx'
    }
})