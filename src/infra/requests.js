import axios from'axios'
import * as urls from './urls'

export const getFlights = async (url = null) => {
    const urlToSend = url ? url : urls.FLIGHTS_URL
    const response = await axios.get(urlToSend)
    return response.data
}

export const login = async (username, password) => {
    const response = await axios.post(urls.LOGIN_URL, {username, password})
    return response.data
}

const getAuthHeader = () => {
    const token = localStorage.getItem('token')
    return {Authorization: `Bearer ${token}`}
}

export const getUserData = async () => {

    const response = await axios.get(urls.USER_DATA_URL, {
        headers: getAuthHeader()
    })
    return response
}