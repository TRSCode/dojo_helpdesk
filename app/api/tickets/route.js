// GET request from the server, but this is an examplet for GET request from the client that will be needed later
import { NextResponse } from "next/server"

export const dynamic = 'force-dynamic' // this will re-run the function on every request and bypass the cache

export async function GET() {
    // const res = await fetch('http://localhost:4000/tickets', {
    //     next: {
    //         revalidate: 0
    //     }
    // })
    // ---or--- force-dynamic
    const res = await fetch('http://localhost:4000/tickets')

    const tickets = await res.json()

    return NextResponse.json(tickets, {
        status: 200
    })
}

export async function POST(request) {
    const ticket = await request.json()

    const res = await fetch('http://localhost:4000/tickets', {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(ticket)
    })

    const newTicket = await res.json()

    return NextResponse.json(newTicket, {
        status: 201
    })
}