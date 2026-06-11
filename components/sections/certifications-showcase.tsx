"use client";

import { motion } from "framer-motion";
import { certifications } from "@/data/certifications";

export function CertificationsShowcase() {
  return (
    <section className="py-24">
      <div className="container-custom">
        <div className="mb-16">
          <p className="mb-4 text-sm uppercase tracking-[0.2em] text-violet-400">
            Certifications
          </p>

          <h2 className="text-4xl font-bold md:text-5xl">
            Credentials & Learning
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.4,
                delay: index * 0.1,
              }}
              className="
                rounded-3xl
                border
                border-white/10
                bg-white/[0.03]
                p-6
                transition
                hover:border-violet-500/40
              "
            >
              <p className="mb-2 text-sm text-violet-400">
                {cert.year}
              </p>

              <h3 className="mb-3 text-xl font-bold">
                {cert.title}
              </h3>

              <p className="text-slate-400">
                {cert.issuer}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}