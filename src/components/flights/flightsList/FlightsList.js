"use client"

import { getFlights } from "@/infra/requests"
import { useEffect, useState } from "react"
import InfiniteScroll from "react-infinite-scroll-component"
import FlightItem from "../flightItem/FlightItem"

const FlightsList = () => {
    const [flights, setFlights] = useState({next: null, results: []})

    const fetchData = async () => {
        const flightsData = await getFlights(flights.next)
        console.log(flightsData)        
        setFlights({
            ...flightsData, 
            results:[...flights.results, ...flightsData.results]})
    }

    useEffect(() => {
        fetchData()
    }, [])

    const items = flights.results.map((flight) => {
        return(
            <FlightItem key={flight.id}
                originCity={flight.origin_city} 
                destCity={flight.dest_city}
                flightId={flight.id}
                />
        )
    })
    return(
        <> {flights.results.length > 0 &&
            <ul>
                <InfiniteScroll
                    dataLength={flights.count}
                    next={fetchData}
                    hasMore={flights.count > flights.results.length}
                    loader={<h4>Loading...</h4>}
                    endMessage={
                      <p style={{ textAlign: 'center' }}>
                        <b>Yay! You have seen it all</b>
                      </p>
                    }
                    >
                {items}
                </InfiniteScroll>
            </ul>
            }
        </>
    )
}

export default FlightsList