import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        marine_blue: "#02295a",
        purplish_blue: "#473dff",
        pastel_blue: "#adbeff",
        light_blue: "#bfe2fd",
        strawberry_red: "#ed3548",
        cool_gray: "#9699ab",
        light_gray: "#d6d9e6",
        magnolia: "#f0f6ff",
        alabaster: "#fafbff",
        white: "#ffffff"
      },
    },
  },
  plugins: [],
} satisfies Config;
