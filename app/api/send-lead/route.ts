import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { name, phone, grade } = await req.json();

    const token = process.env.TELEGRAM_BOT_TOKEN;
    const chatId = process.env.TELEGRAM_CHAT_ID;

    if (!token || !chatId) {
      console.error("Token yoki Chat ID topilmadi!");
      return NextResponse.json({ success: false, error: "Server sozlamalarida xatolik" }, { status: 500 });
    }

    const message = `
🚀 **YANGI ARIZA: FIN SCHOOL**
━━━━━━━━━━━━━━━━━━
👤 **F.I.SH:** ${name}
📞 **Tel:** ${phone}
🎓 **Yo'nalish:** ${grade}
━━━━━━━━━━━━━━━━━━
📅 **Sana:** ${new Date().toLocaleString('uz-UZ', { timeZone: 'Asia/Tashkent' })}
✅ #YangiLid
    `;

    const response = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        chat_id: chatId,
        text: message,
        parse_mode: "Markdown",
      }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error("Telegram API xatosi:", errorData);
      throw new Error("Telegramga yuborishda xatolik");
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Server xatosi:", error);
    return NextResponse.json({ success: false }, { status: 500 });
  }
}