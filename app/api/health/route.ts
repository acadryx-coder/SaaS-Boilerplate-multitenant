import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json({
    status: 'ok',
    app: 'Acadryx',
    timestamp: new Date().toISOString(),
  });
}
