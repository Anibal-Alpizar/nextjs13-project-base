import { NextResponse } from "next/server";

export async function GET(resquest, { params }) {
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}`)
    const user = await res.json()
    console.log(params)
    return NextResponse.json(user)
}