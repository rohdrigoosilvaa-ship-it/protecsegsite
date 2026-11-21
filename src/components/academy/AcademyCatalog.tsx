import { Container } from "../ui/Container";
import { SectionHeader } from "../ui/SectionHeader";
import { CourseCard } from "./CourseCard";
import { academyCourses } from "../../data/academy";

export function AcademyCatalog() {
  return (
    <section id="catalogo" className="bg-[var(--color-gray-subtle)] py-20 sm:py-24">
      <Container>
        <SectionHeader
          eyebrow="Treinamentos"
          title="Cursos que oferecemos"
          description="Capacitação em Segurança e Saúde no Trabalho, organizada por NR."
        />

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {academyCourses.map((course, index) => (
            <CourseCard key={course.code} course={course} delay={index * 0.05} />
          ))}
        </div>

        <p className="mx-auto mt-10 max-w-2xl text-center text-xs leading-relaxed text-[var(--color-gray-mid)]">
          Cargas horárias de referência, sujeitas a alteração. Alguns treinamentos possuem
          requisitos específicos conforme a norma aplicável — consulte antes de contratar.
        </p>
      </Container>
    </section>
  );
}
