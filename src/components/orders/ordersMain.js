"use client"

import { Button } from '@mui/material'
import { signIn, useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'

export default function OrdersMain() {
    const router = useRouter()
    // const session = await getServerSession(req, res, authOptions)
    const {data, status} = useSession()

    console.log(data, status)

    if (status == 'authenticated') {
        return (
            <>
            <h2>Orders</h2>
            {/* <Counter /> */}
            <Button onClick={() => router.push('/')}>HOME</Button>
            </>
        )
    } else if (status === 'unauthenticated') {
    return(
        <>
        Not signed in <br />
        <button onClick={() => signIn()}>Sign in</button>
      </>
    )
    }
}