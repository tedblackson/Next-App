import { NextRequest, NextResponse } from "next/server";
import prisma  from "@/prisma/client"
import schema from './schema';

export async function GET(request: NextRequest){

    const users = await prisma.user.findMany();

    return NextResponse.json(users);
    
}


export async function  POST (request: NextRequest){
    const body = await request.json();

    const validation =  schema.safeParse(body);

    if(!validation.success) return NextResponse.json({error: validation.error.errors}, {status: 400});

    const exists = await prisma.user.findFirst({where:{email: body.email}});

    if(exists) return NextResponse.json({error: 'User already exists'}, {status: 400});

    const user = await prisma.user.create({data:{

        name: body.name,
        email: body.email,

    }});

    return NextResponse.json({user})

}