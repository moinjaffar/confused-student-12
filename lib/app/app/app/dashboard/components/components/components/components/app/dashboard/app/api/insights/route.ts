import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json({
    insight: "Focus on Mathematics. You have spent 30% less time on it this week.",
    productivityScore: 88
  });
}
