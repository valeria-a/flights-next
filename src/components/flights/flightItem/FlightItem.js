import Link from "next/link";

const FlightItem = ({originCity, destCity, flightId}) => {
    return(
        <div style={{height: '30em'}}>
            {/* <a href={`/flights/${flightId}`}>{`${originCity} => ${destCity}`}</a> */}
            <Link href={`/flights/${flightId}`}>{`${originCity} => ${destCity}`}</Link>
        </div>
    )
}

export default FlightItem;