import { useEffect, useState, type ReactNode } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { CheckCircle2, Loader2, XCircle } from "lucide-react";
import { Button } from "../ui/Button";
import { contactNeeds } from "../../data/content";
import { cn } from "../../utils/cn";

// Função serverless da Vercel (api/contact.ts) que envia o e-mail via
// Gmail SMTP. Só funciona depois de publicado na Vercel com as
// variáveis de ambiente GMAIL_USER e GMAIL_APP_PASSWORD configuradas —
// não funciona em `npm run dev` local (nem `vite` roda funções serverless).
const FORM_ENDPOINT = "/api/contact";

// Só pedimos o essencial aqui — cargo, cidade e segmento ficam para a
// conversa no WhatsApp, reduzindo a fricção do primeiro contato.
const schema = z.object({
  name: z.string().min(2, "Informe seu nome completo."),
  company: z.string().min(2, "Informe o nome da empresa."),
  email: z.string().email("Informe um e-mail válido."),
  whatsapp: z.string().min(8, "Informe um número válido."),
  employees: z.string().min(1, "Informe o número de colaboradores."),
  need: z.string().min(1, "Selecione a principal necessidade."),
  role: z.string().optional(),
  location: z.string().optional(),
  segment: z.string().optional(),
  message: z.string().optional(),
});

type FormData = z.infer<typeof schema>;

const inputClasses =
  "w-full rounded-[var(--radius-card)] border border-[var(--color-gray-light)] bg-white px-4 py-3 text-sm text-[var(--color-ink)] placeholder:text-[var(--color-gray-mid)] focus:border-[var(--color-green)] focus:outline-none focus:ring-2 focus:ring-[var(--color-green)]/20";

const labelClasses = "mb-1.5 block text-xs font-semibold uppercase tracking-wider text-[var(--color-gray-dark)]";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const {
    register,
    handleSubmit,
    reset,
    setValue,
    watch,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const selectedNeed = watch("need");

  useEffect(() => {
    const onPrefill = (event: Event) => {
      const { need, message } = (event as CustomEvent<{ need: string; message: string }>).detail;
      setValue("need", contactNeeds.includes(need) ? need : "Outro");
      setValue("message", message);
    };
    document.addEventListener("protecseg:prefill", onPrefill);
    return () => document.removeEventListener("protecseg:prefill", onPrefill);
  }, [setValue]);

  const onSubmit = async (data: FormData) => {
    setStatus("loading");
    try {
      const response = await fetch(FORM_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) throw new Error("Falha no envio");

      setStatus("success");
      reset();
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="flex flex-col items-center gap-3 rounded-2xl border border-[var(--color-green)]/20 bg-[var(--color-green-light)] p-10 text-center">
        <CheckCircle2 className="h-10 w-10 text-[var(--color-green)]" />
        <h3 className="text-lg font-bold text-[var(--color-ink)]">Solicitação enviada!</h3>
        <p className="text-sm text-[var(--color-gray-dark)]">
          Obrigado pelo contato. Um especialista da ProtecSeg vai retornar em breve.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-2 text-sm font-semibold text-[var(--color-green-dark)] underline"
        >
          Enviar outra solicitação
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Nome" error={errors.name?.message}>
          <input className={inputClasses} placeholder="Seu nome completo" {...register("name")} />
        </Field>
        <Field label="Empresa" error={errors.company?.message}>
          <input className={inputClasses} placeholder="Nome da empresa" {...register("company")} />
        </Field>
        <Field label="E-mail" error={errors.email?.message}>
          <input type="email" className={inputClasses} placeholder="voce@empresa.com" {...register("email")} />
        </Field>
        <Field label="WhatsApp" error={errors.whatsapp?.message}>
          <input className={inputClasses} placeholder="(00) 00000-0000" {...register("whatsapp")} />
        </Field>
        <Field
          label="Número de colaboradores"
          error={errors.employees?.message}
          className="sm:col-span-2"
        >
          <input className={inputClasses} placeholder="Ex: 50" {...register("employees")} />
        </Field>
      </div>

      <div>
        <span className={labelClasses}>Qual é a principal necessidade da sua empresa?</span>
        <input type="hidden" {...register("need")} />
        <div className="mt-1.5 flex flex-wrap gap-2">
          {contactNeeds.map((need) => (
            <label
              key={need}
              className={cn(
                "cursor-pointer rounded-full border px-3.5 py-2 text-xs font-semibold transition-colors",
                selectedNeed === need
                  ? "border-[var(--color-green)] bg-[var(--color-green)] text-white"
                  : "border-[var(--color-gray-light)] bg-white text-[var(--color-gray-dark)] hover:border-[var(--color-green)]/50",
              )}
            >
              <input
                type="radio"
                value={need}
                checked={selectedNeed === need}
                onChange={() => setValue("need", need, { shouldValidate: true })}
                className="sr-only"
              />
              {need}
            </label>
          ))}
        </div>
        {errors.need ? (
          <span className="mt-1.5 block text-xs font-medium text-[var(--color-status-critical)]">
            {errors.need.message}
          </span>
        ) : null}
      </div>

      <input type="hidden" {...register("message")} />

      {status === "error" ? (
        <div className="flex items-center gap-2 rounded-[var(--radius-card)] border border-[#F2C4C4] bg-[var(--color-status-critical-soft)] px-4 py-3 text-sm text-[var(--color-status-critical-fg)]">
          <XCircle className="h-4 w-4 shrink-0" />
          Não foi possível enviar sua solicitação. Tente novamente.
        </div>
      ) : null}

      <Button type="submit" disabled={status === "loading"} className="w-full sm:w-auto">
        {status === "loading" ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" />
            Enviando...
          </>
        ) : (
          "Quero falar com um especialista"
        )}
      </Button>
      <p className="text-xs text-[var(--color-gray-mid)]">
        Depois do primeiro contato, coletamos os demais detalhes diretamente pelo WhatsApp.
      </p>
    </form>
  );
}

function Field({
  label,
  error,
  children,
  className,
}: {
  label: string;
  error?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <label className={cn("block", className)}>
      <span className={labelClasses}>{label}</span>
      {children}
      {error ? (
        <span className="mt-1 block text-xs font-medium text-[var(--color-status-critical)]">{error}</span>
      ) : null}
    </label>
  );
}
