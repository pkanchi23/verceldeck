"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Section from "@/components/Section";
import SlideHeader from "@/components/SlideHeader";

export default function Slide34Disclaimer() {
  return (
    <Section id="slide-34" className="bg-black">
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
        <div className="max-w-7xl mx-auto px-6 md:px-12 pt-8 md:pt-10 pb-12">
          <SlideHeader title="Disclaimer" className="mb-10 md:mb-12" />

          {/* Body Text Area - Full Width Disclaimer Placeholder */}
          <div className="max-w-7xl whitespace-pre-line">
            <p className="text-white text-[9px] leading-relaxed md:text-[10px] md:leading-relaxed">
              These materials have been prepared by Goldman Sachs on a confidential basis for presentation solely to Vercel, Inc. (the "Company") in connection with an informational presentation which Goldman Sachs is making to senior management, at the Company’s invitation. These materials and Goldman Sachs’ presentation relating to these materials (collectively, the “Presentation”) may not be disclosed to any third party or circulated or referred to publicly or used for or relied upon for any other purpose without the prior written consent of Goldman Sachs.  The Presentation was not prepared with a view to public disclosure or to conform to any disclosure standards under any state, federal or international securities laws or other laws, rules or regulations, and Goldman Sachs does not take any responsibility for the use of the Presentation by persons other than those set forth above. Notwithstanding anything in this Presentation to the contrary, the Company may disclose to any person the US federal income and state income tax treatment and tax structure of any transaction described herein and all materials of any kind (including tax opinions and other tax analyses) that are provided to the Company relating to such tax treatment and tax structure, without Goldman Sachs imposing any limitation of any kind. The Presentation has been prepared by the Investment Banking Division of Goldman Sachs and is not a product of its research department.
              <br />
              <br />
              Goldman Sachs and its affiliates are engaged in advisory, underwriting and financing, principal investing, sales and trading, research, investment management and other financial and non-financial activities and services for various persons and entities. Goldman Sachs and its affiliates and employees, and funds or other entities they manage or in which they invest or have other economic interest or with which they co-invest, may at any time purchase, sell, hold or vote long or short positions and investments in securities, derivatives, loans, commodities, currencies, credit default swaps and other financial instruments of the Company, any other party to any transaction and any of their respective affiliates or any currency or commodity that may be involved in any transaction. The firm’s clients and counterparties may now or in the future include persons and entities that are the subject of the Presentation and the firm may be, may have been or may become involved in other transactions and assignments with or involving these clients and counterparties and/or may have confidential information relating to these clients or counterparties.  The Presentation is neither an expressed nor an implied commitment by Goldman Sachs to act in any capacity with respect to the Company, which commitment shall only be set forth in an engagement letter to be executed between the Company and Goldman Sachs, and does not restrict Goldman Sachs from being engaged by, or otherwise acting with, any other party in any capacity.  Nothing contained herein shall be deemed to create a fiduciary, advisory, agency or other relationship between Goldman Sachs and the Company or its stockholders, directors, officers, employees or creditors, nor shall any of the foregoing persons rely on this document or the presentation thereof.
              <br />
              <br />
              The Presentation has been prepared based on historical financial information, forecasts and other information obtained by Goldman Sachs from publicly available sources (other than information regarding the Company, which may have been obtained from the management of the Company). In preparing the Presentation, Goldman Sachs has relied upon and assumed, without assuming any responsibility for independent verification, the accuracy and completeness of all of the financial, legal, regulatory, tax, accounting and other information provided to, discussed with or reviewed by us, and Goldman Sachs does not assume any liability for any such information. Goldman Sachs does not provide accounting, tax, legal or regulatory advice.
              <br />
              <br />
              Goldman Sachs has not made an independent evaluation or appraisal of the assets and liabilities (including any contingent, derivative or off-balance sheet assets and liabilities) of the Company or any other party to any transaction or any of their respective affiliates and has no obligation to evaluate the solvency of the Company or any other party to any transaction under any state or federal laws relating to bankruptcy, insolvency or similar matters. The analyses contained in the Presentation do not purport to be appraisals nor do they necessarily reflect the prices at which businesses or securities actually may be sold or purchased. Any indications of value or synergies in the Presentation are based solely on public information, are for illustrative purposes only, and do not reflect actual values or synergies that may be achieved or realized by the Company or any views of Goldman Sachs with respect to any such values or synergies.
              <br />
              <br />
              The Presentation does not address the underlying business decision of the Company to engage in any transaction, or the relative merits of any transaction or strategic alternative as compared to any other transaction or alternative that may be available to the Company. The Presentation is necessarily based on economic, monetary, market and other conditions as in effect on, and the information made available to Goldman Sachs as of, the date of such Presentation and Goldman Sachs assumes no responsibility for updating or revising the Presentation based on circumstances, developments or events occurring after such date. The Presentation does not constitute any opinion, nor does the Presentation constitute a recommendation to the Company, any security holder of the Company or any other person as to how to vote or act with respect to any transaction or any other matter. The Presentation, including this disclaimer, are subject to, and governed by, any written agreement between the Company and Goldman Sachs.
            </p>
          </div>
        </div>

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
        <div className="absolute bottom-4 right-4 md:bottom-6 md:right-6 text-sm md:text-base font-light text-white/70">
          34
        </div>
      </div>
    </Section>
  );
}
