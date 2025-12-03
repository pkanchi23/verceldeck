#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const slidesDir = path.join(__dirname, '..', 'components', 'sections');

// Get all slide files
const slideFiles = fs.readdirSync(slidesDir).filter(file => file.startsWith('Slide') && file.endsWith('.tsx'));

slideFiles.forEach(file => {
  const filePath = path.join(slidesDir, file);
  let content = fs.readFileSync(filePath, 'utf8');

  let modified = false;

  // Check if Image is already imported from next/image
  if (!content.includes('import Image from "next/image"')) {
    // Add Image import after motion import
    content = content.replace(
      /import { motion } from "framer-motion";/,
      `import { motion } from "framer-motion";\nimport Image from "next/image";`
    );
    modified = true;
  }

  // Replace Vercel logo placeholder
  const vercelPlaceholderPattern = /{\/\* Top-Right Logo Placeholder \(Vercel\) \*\/}\s*<motion\.div[^>]*>\s*<\/motion\.div>/gs;
  if (vercelPlaceholderPattern.test(content)) {
    content = content.replace(
      /{\/\* Top-Right Logo Placeholder \(Vercel\) \*\/}\s*<motion\.div\s+initial=\{\{ opacity: 0 \}\}\s+animate=\{\{ opacity: 1 \}\}\s+transition=\{\{ delay: [0-9.]+, duration: [0-9.]+ \}\}\s+className="absolute top-\d+ right-\d+ md:top-\d+ md:right-\d+ w-\[140px\] h-\[40px\] border border-zinc-700 rounded bg-transparent flex items-center justify-center"\s*\/>/gs,
      `{/* Top-Right Logo (Vercel) */}
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
        </motion.div>`
    );
    modified = true;
  }

  // Replace Goldman Sachs logo placeholders (remove duplicates)
  const goldmanPattern = /{\/\* Bottom-Left Logo Placeholder \(Goldman Sachs\) \*\/}[\s\S]*?<\/motion\.div>\s*{\/\* Bottom-Left Logo Placeholder \(Goldman Sachs\) \*\/}\s*<div className="absolute bottom-\d+ left-\d+ md:bottom-\d+ md:left-\d+ w-\[140px\] h-\[40px\] border border-zinc-700 rounded bg-transparent flex items-center justify-center">\s*<span className="text-zinc-600 text-xs">GOLDMAN SACHS<\/span>\s*<\/div>/gs;

  if (goldmanPattern.test(content)) {
    content = content.replace(
      goldmanPattern,
      `{/* Bottom-Left Logo (Goldman Sachs) */}
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
        </motion.div>`
    );
    modified = true;
  }

  if (modified) {
    fs.writeFileSync(filePath, content);
    console.log(`✓ Updated ${file}`);
  }
});

console.log('Done!');
