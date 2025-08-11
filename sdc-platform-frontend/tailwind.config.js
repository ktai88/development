import tailwindConfig from "@astron-sdc/design-system/tailwind.config.js";

/** @type {import("tailwindcss").Config} */

export default {
  ...tailwindConfig,
  content: [
    "./src/index.html",
    "./src/main.tsx",
    "./src/components/**/*.{ts,tsx,js,jsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/pages/**/*.{ts,tsx,js,jsx,mdx}",
  ],
};
