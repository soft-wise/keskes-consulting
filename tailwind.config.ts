
import type { Config } from "tailwindcss";
// @ts-expect-error - No types for this plugin
import flatPlugin from "tailwindcss/lib/util/flattenColorPalette";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          50: "#fdfaf5",
          100: "#fbf3e6",
          200: "#f6e3c7",
          300: "#f0cf9f",
          400: "#E0A161", // Primary
          500: "#d4893d",
          600: "#C87828", // Hover
          700: "#a5611f",
          800: "#874e1e",
          900: "#6e411c",
          950: "#3d210d",
        },
        primary: "#E0A161",
        "primary-hover": "#C87828",
      },
      animation: {
        aurora: "aurora 60s linear infinite",
      },
      keyframes: {
        aurora: {
          from: {
            backgroundPosition: "50% 50%, 50% 50%",
          },
          to: {
            backgroundPosition: "350% 50%, 350% 50%",
          },
        },
      },
    },
  },
  plugins: [addVariablesForColors],
};

// This plugin adds each Tailwind color as a global CSS variable, e.g. var(--gray-200).
function addVariablesForColors({ addBase, theme }: any) {
  let allColors = flatPlugin(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );

  addBase({
    ":root": newVars,
  });
}

export default config;
