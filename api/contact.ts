import type { VercelRequest, VercelResponse } from "@vercel/node";
import nodemailer from "nodemailer";

interface ContactPayload {
  name?: string;
  company?: string;
  role?: string;
  email?: string;
  whatsapp?: string;
  location?: string;
  segment?: string;
  employees?: string;
  need?: string;
  message?: string;
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== "POST") {
    res.status(405).json({ error: "Método não permitido." });
    return;
  }

  const body = (typeof req.body === "string" ? JSON.parse(req.body) : req.body) as ContactPayload;
  const { name, company, role, email, whatsapp, location, segment, employees, need, message } = body ?? {};

  if (!name || !company || !email || !need) {
    res.status(400).json({ error: "Campos obrigatórios ausentes." });
    return;
  }

  const user = process.env.GMAIL_USER;
  const pass = process.env.GMAIL_APP_PASSWORD;

  if (!user || !pass) {
    res.status(500).json({ error: "Envio de e-mail não configurado no servidor." });
    return;
  }

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: { user, pass },
  });

  try {
    await transporter.sendMail({
      from: `"Site ProtecSeg" <${user}>`,
      to: user,
      replyTo: email,
      subject: `Novo contato pelo site — ${company}`,
      text: [
        `Nome: ${name}`,
        `Empresa: ${company}`,
        `Cargo: ${role ?? "-"}`,
        `E-mail: ${email}`,
        `WhatsApp: ${whatsapp ?? "-"}`,
        `Cidade/Estado: ${location ?? "-"}`,
        `Segmento: ${segment ?? "-"}`,
        `Número de colaboradores: ${employees ?? "-"}`,
        `Necessidade principal: ${need}`,
        "",
        "Mensagem:",
        message || "-",
      ].join("\n"),
    });

    res.status(200).json({ ok: true });
  } catch (error) {
    console.error("Erro ao enviar e-mail de contato:", error);
    res.status(502).json({ error: "Falha ao enviar e-mail." });
  }
}
