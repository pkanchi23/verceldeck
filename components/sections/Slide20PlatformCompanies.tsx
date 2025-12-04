"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Section from "@/components/Section";

// Card data structure
const companies = [
  {
    id: 1,
    name: "STRIPE",
    category: "Digital Payments",
    logo: "/Slide 20 Best in Class/Company Logos.png/best in Class Startups Pics.png-1.png",
    people: [
      { name: "Patrick Collison", title: "Co-founder and CEO", photo: "/Slide 20 Best in Class/Founder Pics/Founder Pics-1.png" },
      { name: "John Collison", title: "Co-founder and President", photo: "/Slide 20 Best in Class/Founder Pics/Founder Pics-2.png" },
    ],
    delay: 0.0,
    highlight: false,
  },
  {
    id: 2,
    name: "OPENAI",
    category: "Intelligence",
    logo: "/Slide 20 Best in Class/Company Logos.png/best in Class Startups Pics.png-2.png",
    people: [{ name: "Sam Altman", title: "Co-founder and CEO", photo: "/Slide 20 Best in Class/Founder Pics/Founder Pics-3.png" }],
    delay: 0.4,
    highlight: false,
  },
  {
    id: 3,
    name: "DATABRICKS",
    category: "Data",
    logo: "/Slide 20 Best in Class/Company Logos.png/best in Class Startups Pics.png-3.png",
    people: [{ name: "Ali Ghodsi", title: "Co-founder and CEO", photo: "/Slide 20 Best in Class/Founder Pics/Founder Pics-4.png" }],
    delay: 0.8,
    highlight: false,
  },
  {
    id: 4,
    name: "NVIDIA",
    category: "Compute",
    logo: "/Slide 20 Best in Class/Company Logos.png/best in Class Startups Pics.png-4.png",
    people: [{ name: "Jensen Huang", title: "Founder, President and CEO", photo: "/Slide 20 Best in Class/Founder Pics/Founder Pics-5.png" }],
    delay: 1.2,
    highlight: false,
  },
  {
    id: 5,
    name: "VERCEL",
    category: "AI cloud",
    logo: "/Slide 20 Best in Class/Company Logos.png/best in Class Startups Pics.png-5.png",
    people: [{ name: "Guillermo Rauch", title: "Co-founder and CEO", photo: "/Slide 20 Best in Class/Founder Pics/Founder Pics-6.png" }],
    delay: 1.6,
    highlight: true,
  },
];

// Reusable Company Card Component
const CompanyCard = ({
  name,
  category,
  logo,
  people,
  delay,
  highlight,
}: {
  name: string;
  category: string;
  logo: string;
  people: { name: string; title: string; photo: string }[];
  delay: number;
  highlight: boolean;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ delay: delay + 0.5, duration: 1.0, ease: "easeOut" }}
      className="flex-1 min-w-[240px] max-w-[340px]"
    >
      <motion.div
        className={`h-full rounded-xl p-6 flex flex-col items-center ${highlight ? "border-2 border-teal-500" : "border border-white"
          }`}
        style={{
          backgroundColor: "#0a0a0a",
          boxShadow: highlight
            ? "0 0 40px rgba(20, 184, 166, 0.6), 0 0 80px rgba(20, 184, 166, 0.3)"
            : "none",
        }}
        animate={
          highlight
            ? {
              boxShadow: [
                "0 0 20px rgba(20, 184, 166, 0.4), 0 0 40px rgba(20, 184, 166, 0.2)",
                "0 0 40px rgba(20, 184, 166, 0.8), 0 0 80px rgba(20, 184, 166, 0.4)",
                "0 0 20px rgba(20, 184, 166, 0.4), 0 0 40px rgba(20, 184, 166, 0.2)",
              ],
            }
            : {}
        }
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        {/* Logo */}
        <div className="w-full h-16 relative mb-6">
          <Image
            src={logo}
            alt={`${name} Logo`}
            fill
            className="object-contain"
          />
        </div>

        {/* Category Pill */}
        <div className="px-4 py-1.5 bg-zinc-800/50 border border-zinc-700 rounded-md mb-6">
          <span className="text-white text-sm font-bold">{category}</span>
        </div>

        {/* People */}
        {people.length > 1 ? (
          // Multiple people - show side by side
          <div className="flex gap-3 mb-4">
            {people.map((person, index) => (
              <div key={index} className="flex flex-col items-center">
                <div className="w-24 h-24 relative rounded-lg overflow-hidden mb-4 bg-zinc-900/30">
                  <Image
                    src={person.photo}
                    alt={person.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="text-center max-w-[150px]">
                  <p className="text-white font-medium text-[10px] md:text-xs leading-tight">
                    {person.name}
                  </p>
                  <p className="text-white/70 text-[10px] md:text-xs font-light leading-tight mt-0.5">
                    {person.title}
                  </p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          // Single person
          <>
            <div className="w-24 h-24 relative rounded-lg overflow-hidden mb-4 bg-zinc-900/30">
              <Image
                src={people[0].photo}
                alt={people[0].name}
                fill
                className="object-cover"
              />
            </div>
            {/* People Info */}
            <div className="text-center space-y-1">
              {people.map((person, index) => (
                <div key={index} className="text-center">
                  <p className="text-white font-medium text-[10px] md:text-xs leading-tight">
                    {person.name}
                  </p>
                  <p className="text-white/70 text-[10px] md:text-xs font-light leading-tight mt-0.5">
                    {person.title}
                  </p>
                </div>
              ))}
            </div>
          </>
        )}
      </motion.div>
    </motion.div>
  );
};

export default function Slide20PlatformCompanies() {
  return (
    <Section id="slide-20" className="bg-black">
      <div className="relative w-full min-h-screen">
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

        {/* Main Content Container */}
        <div className="max-w-7xl mx-auto px-6 md:px-12 pt-16 md:pt-20 pb-24">
          {/* Header Section */}
          <div className="mb-12 md:mb-16">
            {/* Main Title */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3"
            >
              The new breed of platform companies for the AI era
            </motion.h1>

            {/* Subtitle */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-lg md:text-xl lg:text-2xl font-medium text-white/70"
            >
              Breaking the mold
            </motion.h2>
          </div>

          {/* Five Company Cards Row */}
          <div className="flex flex-wrap lg:flex-nowrap gap-4 md:gap-6 justify-center items-stretch">
            {companies.map((company) => (
              <CompanyCard
                key={company.id}
                name={company.name}
                category={company.category}
                logo={company.logo}
                people={company.people}
                delay={company.delay}
                highlight={company.highlight}
              />
            ))}
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
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="absolute bottom-4 right-4 md:bottom-6 md:right-6 text-sm md:text-base font-light text-white/70"
        >
          20
        </motion.div>
      </div>
    </Section>
  );
}
