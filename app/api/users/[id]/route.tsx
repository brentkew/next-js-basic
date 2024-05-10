import { NextRequest, NextResponse } from "next/server";


interface Props {
    params: {
        id: number;
        name: string
    }
}

export function GET(request: NextRequest, { params: {id, name} }:Props) {

    if(id > 10)
        return NextResponse.json({error: "Not found user", status: 400})

  return NextResponse.json([
    { id: 1, name: "khalil" }
  ]);
}
