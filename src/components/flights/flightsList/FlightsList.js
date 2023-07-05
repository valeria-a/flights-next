"use client"

import { getFlights } from "@/infra/requests"
import { useEffect, useState } from "react"
// import InfiniteScroll from "react-infinite-scroll-component"
import InfiniteScroll from 'react-infinite-scroller';
import FlightItem from "../flightItem/FlightItem"
import NoMoreFlights from "./NoMoreFlights"

const FlightsList = ({initialData}) => {

    const [flights, setFlights] = useState(initialData)
    // const [flights, setFlights] = useState({results: [], next: null, count: 10})

    const fetchData = async () => {
        const flightsData = await getFlights(flights.next)
        // console.log(flightsData)        
        setFlights((flights) => { 
            return {...flightsData, results:[...flights.results, ...flightsData.results]}
        })
    }

    const hasNext = flights.count > flights.results.length
    // console.log('has next:', hasNext)
    // console.log('flights', flights)

    // useEffect(() => {
    //     fetchData()
    // }, [])

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
        // <> {flights.results.length > 0 &&
            
                // <InfiniteScroll
                //     dataLength={flights.count}
                //     next={fetchData}
                //     hasMore={hasNext}
                //     loader={<h4>Loading...</h4>}
                //     endMessage={<NoMoreFlights />}>
                // {items}
                // </InfiniteScroll>
                <InfiniteScroll
                pageStart={0}
                loadMore={fetchData}
                hasMore={hasNext}
                loader={<h4 key={0}>Loading...</h4>}>
                    {items}
                </InfiniteScroll>
            
            // }
        // </>
    )
}

export default FlightsList