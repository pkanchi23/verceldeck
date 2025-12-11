"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Section from "@/components/Section";
import SlideHeader from "@/components/SlideHeader";

export default function Slide26DisclosureIPO() {
  return (
    <Section id="slide-26" className="bg-black">
      <div className="relative w-full h-full">
        {/* Top-Right Logo (Vercel) */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="absolute top-4 right-4 md:top-6 md:right-6 w-[140px] h-[40px] flex items-center justify-end"
        >
          <div className="relative w-full h-full">
            <Image
              src="/Vercel Logo.svg"
              alt="Vercel Logo"
              fill
              className="object-contain object-right"
            />
          </div>
        </motion.div>

        {/* Main Content */}
        <div className="max-w-7xl mx-auto px-6 md:px-12 pt-4 md:pt-6 pb-24">
          <SlideHeader
            title="What do most companies disclose at IPO?"
            className="mb-6 md:mb-8"
          />

          {/* Large Centered Disclosure Table */}
          <div className="flex items-center justify-center py-4 md:py-6 relative z-0">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }}
              className="w-full h-[600px] md:h-[720px] lg:h-[840px] relative -mt-40"
            >
              <Image
                src="/Slide 26 Disclosures/Disclosures Table v2.png"
                alt="Disclosure Table"
                fill
                className="object-contain"
              />
            </motion.div>
          </div>
        </div>

        {/* Bottom-Left Footnote Placeholder */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="absolute bottom-20 left-4 md:bottom-20 md:left-6"
        >
          <p className="text-white/40 text-[10px] leading-relaxed">
            Source: Public filings, IPO roadshow presentations; Note: A check represents either a range or a specific number is disclosed. ARR is checked even if the $ figure is not explicitly provided but can be approximated from other disclosure. RPO/Backlog and Billings are checked only if the figure is disclosed as a key business metric or Non-GAAP reconciliation. Sub-Segment of Total Paying Customers is checked if a company releases the number of customers for a specific product, customers that fall in a specific revenue/ARR/ACV bucket, Fortune 100 customers or active paying customer accounts. TAM reflects the total addressable market as of the IPO year, as disclosed by the company. A check represents either a range or specific number disclosed at the time of IPO. ¹ GitLab Total Paying Customers reflects “Base Customers” with $5k+ in ARR, which represents 90%+ of total ARR. ² CrowdStrike Total Paying Customers reflects “Subscription Customers”, which represents 95%+ of total revenue. ³ GitLab Sub-Segment of Total Paying Customers reflects customers with $100k+ and $1mm+ in ARR. 4 Slack disclosed % revenue derived from customers that upgraded from free to paid but not specific mix by tier.
          </p>
        </motion.div>

        {/* Bottom-Left Logo (Goldman Sachs) */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="absolute bottom-4 left-4 md:bottom-6 md:left-6 w-[140px] h-[40px] flex items-center justify-start"
        >
          <div className="relative w-full h-full">
            <Image
              src="/Goldman Sachs Logo.svg"
              alt="Goldman Sachs Logo"
              fill
              className="object-contain object-left"
            />
          </div>
        </motion.div>

        {/* Page Number - Bottom-Right */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="absolute bottom-4 right-4 md:bottom-6 md:right-6 text-sm md:text-base font-light text-white/70"
        >
          26
        </motion.div>
      </div>
    </Section>
  );
}
