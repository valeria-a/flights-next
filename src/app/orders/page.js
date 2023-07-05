"use client"

import OrdersMain from "@/components/orders/ordersMain"
import { SessionProvider } from "next-auth/react"

const OrdersPage = (props) => {
    return(
        <SessionProvider session={props.session}>
            <OrdersMain />
        </SessionProvider>
    )

}

export default OrdersPage