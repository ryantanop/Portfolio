// app/api/portfolio/route.ts
import { NextResponse } from 'next/server';
import { connectDB } from '@/lib/mongoose';
import Portfolio from '@/models/Portfolio';

export async function GET() {
  try {
    await connectDB();
    const items = await Portfolio.find({});
    return NextResponse.json(items);
  } catch (error) {
    return NextResponse.json({ error: (error as Error).message }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    await connectDB();
    const body = await request.json();
    console.log(body);
    const newItem = await Portfolio.create(body);
    return NextResponse.json(newItem, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: (error as Error).message }, { status: 500 });
  }
}
