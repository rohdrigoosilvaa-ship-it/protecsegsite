import { Container } from "../ui/Container";
import { SectionHeader } from "../ui/SectionHeader";
import { addonServices } from "../../data/plans";
import { AddonServiceCard } from "./AddonServiceCard";

function formatBRL(value: number) {
  return value.toLocaleString("pt-BR", { style: "currency", currency: "BRL", maximumFractionDigits: 0 });
}

export function AddonServices() {
  return (
    <section id="avulsos" className="bg-white py-20 sm:py-24">
      <Container>
        <SectionHeader
          eyebrow="Serviços avulsos"
          title="Precisa de um documento específico? Também atendemos por demanda."
          description="Fora dos planos mensais, os principais programas, laudos e documentos técnicos também podem ser contratados avulsos."
        />

        <div className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
          {addonServices.map((service, index) => (
            <AddonServiceCard key={service.name} service={service} delay={index * 0.03} formatBRL={formatBRL} />
          ))}
        </div>

        <p className="mx-auto mt-8 max-w-2xl text-center text-xs leading-relaxed text-[var(--color-gray-dark)]">
          Os valores apresentados são referências para serviços de baixa complexidade. O valor
          final é definido após análise do número de colaboradores, atividades, ambientes,
          funções e complexidade da operação. PGR, PCMSO, LTCAT, AET e determinados laudos podem
          envolver atribuições profissionais específicas — a execução e assinatura seguem as
          atribuições legalmente habilitadas para cada documento.
        </p>
      </Container>
    </section>
  );
}
