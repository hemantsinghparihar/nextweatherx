/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      screens: {
        'xs': '480px',      // Extra small devices
        'sm': '640px',      // Small devices
        'md': '768px',      // Medium devices
        'laptop': '1024px',     // Large devices
        'xl': '1280px',     // Extra large devices
        '2xl': '1536px',    // 2X large devices
        '3xl': '1920px',    // Custom extra-large
      },
    },
  },
  plugins: [],
};
