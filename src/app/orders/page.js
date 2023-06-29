"use client"

import { Button } from '@mui/material'
import styles from './page.module.css'
import Counter from "@/components/counter/Counter"
import { useRouter } from 'next/navigation'

const OrdersPage = () => {

    const router = useRouter()

    return (
        <>
        <h2 className={styles.title}>Orders</h2>
        {/* <Counter /> */}
        <Button onClick={() => router.push('/')}>HOME</Button>
        </>
    )
}

export default OrdersPage