import axios from'axios'
import * as urls from './urls'

export const getFlights = async (url = null) => {
    const urlToSend = url ? url : urls.FLIGHTS_URL
    const response = await axios.get(urlToSend)
    return response.data
}