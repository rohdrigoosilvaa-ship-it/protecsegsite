import type { VercelRequest, VercelResponse } from "@vercel/node";
import nodemailer from "nodemailer";

const escape = (s: unknown) =>
  String(s ?? "").replace(/[&<>"']/g, (c) => `&#${c.charCodeAt(0)};`).slice(0, 5000);

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== "POST") return res.status(405).json({ error: "Method not allowed" });

  const { name, email, phone, company, message } = req.body ?? {};
  if (!name || !email || !phone || !message) {
    return res.status(400).json({ error: "Campos obrigatórios ausentes" });
  }

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: { user: process.env.GMAIL_USER, pass: process.env.GMAIL_APP_PASSWORD },
  });

  try {
    await transporter.sendMail({
      from: `"Site ProtecSeg" <${process.env.GMAIL_USER}>`,
      to: process.env.CONTACT_TO || "protecseg21@gmail.com",
      replyTo: String(email),
      subject: `Novo contato pelo site — ${escape(name)}`,
      html: `
        <h2>Novo contato pelo site</h2>
        <p><b>Nome:</b> ${escape(name)}</p>
        <p><b>E-mail:</b> ${escape(email)}</p>
        <p><b>Telefone:</b> ${escape(phone)}</p>
        <p><b>Empresa:</b> ${escape(company) || "-"}</p>
        <p><b>Mensagem:</b><br>${escape(message).replace(/\n/g, "<br>")}</p>
      `,
    });
    return res.status(200).json({ ok: true });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: "Falha ao enviar" });
  }
}
