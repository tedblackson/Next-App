import { NextRequest, NextResponse } from "next/server";
import schema from "./schema";
import prisma from "@/prisma/client";
import bcrypt from 'bcrypt';

export async function POST (request: NextRequest){

    const body = await request.json();

    const validation = schema.safeParse(body)

    if (!validation.success) 
        return NextResponse.json({error: validation.error.errors}, {status: 400});

    const exists = await prisma.user.findUnique({
        where: {
            email: body.email
        }
    });

    if (exists)
        return NextResponse.json({error: 'User already exists'}, {status: 400});

    const hashedPassword = await bcrypt.hash(body.password, 10);

    const user = await prisma.user.create({
        data: {
            name: body.name,
            email: body.email,
            hashedPassword
        
        },
        
    });

    return NextResponse.json({email: user.email, name: user.name, id: user.id}, {status: 201});
    

    






}