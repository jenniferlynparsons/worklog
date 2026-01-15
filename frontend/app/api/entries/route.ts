import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const response = await fetch("http://localhost:8000/entries");
  if (!response.ok) {
    return NextResponse.json(
      { error: "Failed to fetch entries" },
      { status: response.status },
    );
  }
  const data = await response.json();
  return NextResponse.json(data);
}

export async function POST(request: NextRequest) {
  const { title } = await request.json();
  const response = await fetch("http://localhost:8000/entries", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ title }),
  });
  if (!response.ok) {
    return NextResponse.json(
      { error: "Failed to create entry" },
      { status: response.status },
    );
  }
  const data = await response.json();
  return NextResponse.json(data);
}
