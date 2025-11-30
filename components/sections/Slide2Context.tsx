"use client";

import { motion } from "framer-motion";
import Section from "@/components/Section";

const contextCards = [
  {
    id: 1,
    label: "SLIDE_2_CARD_1_LABEL",
    body: "SLIDE_2_CARD_1_BODY",
  },
  {
    id: 2,
    label: "SLIDE_2_CARD_2_LABEL",
    body: "SLIDE_2_CARD_2_BODY",
  },
  {
    id: 3,
    label: "SLIDE_2_CARD_3_LABEL",
    body: "SLIDE_2_CARD_3_BODY",
  },
  {
    id: 4,
    label: "SLIDE_2_CARD_4_LABEL",
    body: "SLIDE_2_CARD_4_BODY",
  },
  {
    id: 5,
    label: "SLIDE_2_CARD_5_LABEL",
    body: "SLIDE_2_CARD_5_BODY",
  },
];

export default function Slide2Context() {
  return (
    <Section id="slide-2" className="bg-black">
      <div className="grid md:grid-cols-[1.1fr,1.4fr] gap-10 items-start">
        {/* Left Column: Title & Lede */}
        <div>
          <h2 className="text-3xl md:text-4xl font-semibold text-slate-50 mb-4">
            SLIDE_2_TITLE
          </h2>
          <p className="text-zinc-400 text-sm md:text-base leading-relaxed">
            SLIDE_2_LEDE
          </p>
        </div>

        {/* Right Column: Context Cards */}
        <div className="space-y-4">
          {contextCards.map((card, index) => (
            <motion.div
              key={card.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.4, delay: 0.1 * index }}
              className="rounded-2xl border border-zinc-800 bg-zinc-950/60 p-4 md:p-5"
            >
              <p className="text-xs uppercase tracking-wide text-zinc-500 mb-2">
                {card.label}
              </p>
              <p className="text-zinc-200 text-sm md:text-base leading-relaxed">
                {card.body}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
