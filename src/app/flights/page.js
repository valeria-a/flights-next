import FlightsList from '@/components/flights/flightsList/FlightsList'
import styles from './page.module.css'

export default function FlightsPage() {

  

  return (
    <>
      <h2 className={styles.title}>Flights page</h2>
      <FlightsList />
    </>
  )
}
