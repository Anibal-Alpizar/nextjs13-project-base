import { NextResponse } from 'next/server'

export async function GET() {
    // extract params
    // query database
    // comunicate with other services
    const res = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await res.json()
    return NextResponse.json(data)

}

export function POST() {
    return NextResponse.json({
        message: 'Posting data to the API'
    })
}

export function PUT() {
    return NextResponse.json({
        message: 'Updating data from the API'
    })
}

export function DELETE() {
    return NextResponse.json({
        message: 'Deleting data from the API'
    })
}