"use client"
import axios from 'axios'
import useSWR from 'swr'
import * as urls from '../../../infra/urls'

const FlightDetailsPage = (props) => {

    const fetchData = async (swrKey) => {
        return await axios.get(`${urls.FLIGHTS_URL}/${props.params.id}`)
    }

    const {data, isLoading, error} = useSWR(
        '/flights/[id]', 
        fetchData)
    
    console.log(data, isLoading, error)

    if (isLoading) return <p>Loading...</p>
    if (error) return <p>Error occured: {error}</p>

    return(
        <>
            <p>flight code:</p>
            <p>{data.data.flight_code}</p>
        </>
    )
}
export default FlightDetailsPage