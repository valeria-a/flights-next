import axios from "axios"
import * as urls from '../../../infra/urls'
import { Suspense } from "react"

const FlightDetails = async (props) => {

    console.log(props)
    const response = await axios.get(`${urls.FLIGHTS_URL}/${props.flightId}`)

    return(
        <>
            <h3>Flight details</h3>
            <p>Flight code: </p>
            <p>{response.data.flight_code}</p>
        </>
    )

}


const FlightDetailsPage = (props) => {
    return(
        <Suspense fallback={<p style={{color: 'green'}}>LOADING FLIGHTS DETAILS</p>}>
            <FlightDetails flightId={props.params.id}/>
        </Suspense>
    )
}

export default FlightDetailsPage