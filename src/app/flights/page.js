import FlightsList from '@/components/flights/flightsList/FlightsList'
import styles from './page.module.css'
import { getFlights } from '@/infra/requests'

export default async function FlightsPage() {

  const data = await getFlights()

  return (
    <div style={{overflow: 'visible'}}>
      <h2 className={styles.title}>Flights page</h2>
      <FlightsList initialData = {data}/>
      {/* <FlightsList /> */}
    </div>
  )

  
}

