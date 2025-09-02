import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const form = await req.json().catch(() => null);
  if (!form || !form.email || !form.message) {
    return NextResponse.json({ ok: false, error: "Invalid payload" }, { status: 400 });
  }
  return NextResponse.json({ ok: true });
}
