import { useState, type FormEvent } from "react";
import { AnimatePresence, m } from "framer-motion";
import { CheckCircle2, Loader2, Send } from "lucide-react";
import { Reveal } from "../components/Reveal";
import { CONTACT, FINAL_CTA } from "../lib/content";

type Field = "name" | "email" | "phone" | "company" | "message";
type Errors = Partial<Record<Field, string>>;

function validate(d: Record<Field, string>): Errors {
  const e: Errors = {};
  if (d.name.trim().length < 2) e.name = "Informe seu nome";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(d.email.trim())) e.email = "E-mail inválido";
  if (d.phone.replace(/\D/g, "").length < 8) e.phone = "Informe um telefone";
  if (d.message.trim().length < 5) e.message = "Escreva uma mensagem";
  return e;
}

const inputClass =
  "w-full rounded-xl border border-brand-gray-900 bg-brand-graphite px-4 py-3 text-white placeholder:text-brand-gray-500 outline-none transition-colors focus:border-brand-green";

export function FinalCta() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [errors, setErrors] = useState<Errors>({});

  const onSubmit = async (ev: FormEvent<HTMLFormElement>) => {
    ev.preventDefault();
    const form = ev.currentTarget;
    const fd = new FormData(form);
    const data = Object.fromEntries(
      (["name", "email", "phone", "company", "message"] as Field[]).map((k) => [k, String(fd.get(k) ?? "")])
    ) as Record<Field, string>;
    const errs = validate(data);
    setErrors(errs);
    if (Object.keys(errs).length) return;
    setStatus("sending");
    try {
      const res = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error();
      setStatus("sent");
      form.reset();
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contato" className="bg-brand-black py-24 text-white md:py-32">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-14 px-6 lg:grid-cols-2">
        <Reveal direction="left">
          <h2 className="text-balance text-3xl font-bold md:text-5xl">{FINAL_CTA.title}</h2>
          <p className="mt-6 text-lg text-brand-gray-300">{FINAL_CTA.description}</p>
          <a
            href={`https://wa.me/${CONTACT.whatsapp}`}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-brand-green px-7 py-3.5 font-semibold transition-all hover:scale-105 hover:bg-brand-green-dark"
          >
            {FINAL_CTA.button} pelo WhatsApp
          </a>
        </Reveal>

        <Reveal direction="right" delay={0.1}>
          <AnimatePresence mode="wait">
            {status === "sent" ? (
              <m.div
                key="sent"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex h-full flex-col items-center justify-center gap-4 rounded-2xl bg-brand-graphite p-10 text-center"
              >
                <CheckCircle2 size={56} className="text-brand-green" />
                <p className="text-xl font-semibold">Mensagem enviada!</p>
                <p className="text-brand-gray-300">Em breve um especialista entrará em contato.</p>
                <button onClick={() => setStatus("idle")} className="mt-2 text-sm text-brand-green underline">
                  Enviar outra mensagem
                </button>
              </m.div>
            ) : (
              <m.form
                key="form"
                onSubmit={onSubmit}
                noValidate
                className="space-y-4 rounded-2xl bg-brand-graphite/50 p-6 md:p-8"
              >
                {(
                  [
                    { name: "name", label: "Nome", type: "text" },
                    { name: "email", label: "E-mail", type: "email" },
                    { name: "phone", label: "Telefone / WhatsApp", type: "tel" },
                    { name: "company", label: "Empresa (opcional)", type: "text" },
                  ] as const
                ).map((f) => (
                  <div key={f.name}>
                    <label htmlFor={f.name} className="sr-only">{f.label}</label>
                    <input id={f.name} type={f.type} placeholder={f.label} name={f.name} autoComplete={f.name === "company" ? "organization" : f.name === "phone" ? "tel" : f.name} className={inputClass} />
                    {errors[f.name] && <p className="mt-1 text-sm text-red-400">{errors[f.name]}</p>}
                  </div>
                ))}
                <div>
                  <label htmlFor="message" className="sr-only">Mensagem</label>
                  <textarea id="message" rows={4} placeholder="Como podemos ajudar?" name="message" className={inputClass} />
                  {errors.message && <p className="mt-1 text-sm text-red-400">{errors.message}</p>}
                </div>
                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="flex w-full items-center justify-center gap-2 rounded-full bg-brand-green py-3.5 font-semibold transition-all hover:bg-brand-green-dark disabled:opacity-60"
                >
                  {status === "sending" ? <Loader2 size={18} className="animate-spin" /> : <Send size={18} />}
                  {status === "sending" ? "Enviando..." : "Enviar mensagem"}
                </button>
                {status === "error" && (
                  <p className="text-center text-sm text-red-400">
                    Não foi possível enviar. Tente pelo WhatsApp.
                  </p>
                )}
              </m.form>
            )}
          </AnimatePresence>
        </Reveal>
      </div>
    </section>
  );
}
