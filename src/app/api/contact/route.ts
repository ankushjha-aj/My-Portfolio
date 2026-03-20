import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function POST(req: NextRequest) {
  try {
    const data = await req.json();
    const timestamp = new Date().toISOString().replace(/[:.]/g, "-");
    const filename = `message-${timestamp}.json`;

    const messagesDir = path.join(process.cwd(), "messages");
    if (!fs.existsSync(messagesDir)) {
      fs.mkdirSync(messagesDir, { recursive: true });
    }

    const filePath = path.join(messagesDir, filename);
    fs.writeFileSync(
      filePath,
      JSON.stringify(
        {
          ...data,
          timestamp: new Date().toISOString(),
        },
        null,
        2
      )
    );

    return NextResponse.json({ success: true, file: filename });
  } catch (error) {
    return NextResponse.json({ success: false, error: "Failed to save message" }, { status: 500 });
  }
}
