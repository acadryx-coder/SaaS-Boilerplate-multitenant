import { NextRequest, NextResponse } from 'next/server';
import { randomUUID } from 'crypto';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, subdomain, logo, primaryColor } = body;

    if (!name || !subdomain) {
      return NextResponse.json(
        { error: 'Name and subdomain are required' },
        { status: 400 }
      );
    }

    // TEMP in-memory response (no hardcoding, no DB yet)
    const institution = {
      id: randomUUID(),
      name,
      subdomain,
      logo: logo || null,
      primaryColor: primaryColor || '#2563eb',
      createdAt: new Date().toISOString(),
    };

    return NextResponse.json(institution, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { error: 'Invalid request body' },
      { status: 500 }
    );
  }
      }
