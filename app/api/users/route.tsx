import { NextRequest, NextResponse } from "next/server";
// import { prisma }  from "@prisma/client";


// GET Request
export function GET(request: NextRequest) {

  // const users = prisma.user.findMany();
  // console.log(users);

  // prisma.User.findMany();
  return NextResponse.json([
    { id: 1, name: "khalil" },
    { id: 2, name: "ahmad" },
  ]);
}

// POST Request
export async function POST(request: NextRequest) {
  const body = await request.json();
  if (!body.name) {
    return NextResponse.json({ message: "Name is required" }, { status: 400 });
  }
  return NextResponse.json({ id: 1, name: "khalil ahmad" }, { status: 201 });
}
