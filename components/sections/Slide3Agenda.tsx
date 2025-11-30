"use client";

import { motion } from "framer-motion";
import Section from "@/components/Section";

const agendaItems = [
  {
    id: 1,
    title: "SLIDE_3_AGENDA_ITEM_1_TITLE",
    description: "SLIDE_3_AGENDA_ITEM_1_DESC",
  },
  {
    id: 2,
    title: "SLIDE_3_AGENDA_ITEM_2_TITLE",
    description: "SLIDE_3_AGENDA_ITEM_2_DESC",
  },
  {
    id: 3,
    title: "SLIDE_3_AGENDA_ITEM_3_TITLE",
    description: "SLIDE_3_AGENDA_ITEM_3_DESC",
  },
  {
    id: 4,
    title: "SLIDE_3_AGENDA_ITEM_4_TITLE",
    description: "SLIDE_3_AGENDA_ITEM_4_DESC",
  },
];

export default function Slide3Agenda() {
  return (
    <Section
      id="slide-3"
      className="bg-gradient-to-b from-black via-zinc-950 to-black"
    >
      <div className="max-w-4xl">
        {/* Section Title & Subtitle */}
        <div className="mb-12">
          <h2 className="text-3xl md:text-5xl font-semibold text-slate-50 mb-4">
            SLIDE_3_TITLE
          </h2>
          <p className="text-zinc-400 text-base md:text-lg max-w-2xl">
            SLIDE_3_SUBTITLE
          </p>
        </div>

        {/* Vertical Stepper */}
        <div className="space-y-8 relative">
          {/* Vertical line */}
          <div className="absolute left-[5px] top-4 bottom-4 w-px bg-zinc-800" />

          {agendaItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.4, delay: 0.05 * index }}
              className="flex gap-6 items-start relative"
            >
              {/* Marker */}
              <motion.div
                initial={{ scale: 0.8 }}
                whileInView={{ scale: 1.1 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.3, delay: 0.05 * index + 0.2 }}
                className="w-3 h-3 rounded-full border-2 border-zinc-400 bg-zinc-900 flex-shrink-0 mt-1.5 relative z-10"
              />

              {/* Content Card */}
              <div className="flex-1 pb-2">
                <h3 className="text-xl md:text-2xl font-medium text-slate-100 mb-2">
                  {item.title}
                </h3>
                <p className="text-zinc-400 text-sm md:text-base leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
