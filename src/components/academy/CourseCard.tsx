import { motion } from "framer-motion";
import { Clock } from "lucide-react";
import type { AcademyCourse } from "../../data/academy";

export function CourseCard({ course, delay = 0 }: { course: AcademyCourse; delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.45, delay, ease: "easeOut" }}
      className="rounded-[var(--radius-card-lg)] border border-[var(--color-gray-light)] bg-white p-6 shadow-[var(--shadow-card-xs)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow-card-md)]"
    >
      <span className="rounded-full bg-[var(--color-green-light)] px-3 py-1 text-xs font-bold uppercase tracking-wider text-[var(--color-green-dark)]">
        {course.code}
      </span>

      <h3 className="mt-4 text-base font-bold leading-snug text-[var(--color-ink)]">{course.name}</h3>
      <p className="mt-2 text-sm leading-relaxed text-[var(--color-gray-dark)]">
        {course.description}
      </p>

      <span className="mt-4 flex items-center gap-1.5 text-xs font-medium text-[var(--color-gray-mid)]">
        <Clock className="h-3.5 w-3.5" />
        {course.hours} · EAD
      </span>
    </motion.div>
  );
}
