import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";
import tseslint from "typescript-eslint";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  // Load Next.js + TypeScript legacy configs
  ...compat.extends("next/core-web-vitals", "next/typescript"),

  // Load modern @typescript-eslint rules
  ...tseslint.config({
    rules: {
      // Disable base rule (important!)
      "no-unused-vars": "off",
      // Use TypeScript-specific version instead
      "@typescript-eslint/no-unused-vars": "warn", // or "error"
    },
  }),
];

export default eslintConfig;
