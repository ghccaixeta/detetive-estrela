import { TIPS_DATA } from "@/utils/constants";
import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json(TIPS_DATA);
}
