/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        // Paleta semántica para Gastronomía
        primary: {
          DEFAULT: "#C0392B", // Carrot Orange (Estimula apetito)
          foreground: "#FFFFFF",
        },
        secondary: {
          DEFAULT: "#2C3E50", // Midnight Blue (Elegancia/Seriedad)
          foreground: "#FDFEFE",
        },
        accent: {
          DEFAULT: "#7A0C00", // Wine Red (Para urgencia/reservas)
          foreground: "#FFFFFF",
        },
        surface: {
          50: "#f7e3e1", // Fondo ultra claro
          100: "#F2F2F2", // Secciones suaves
          800: "#1A1A1A", // Dark Mode opcional/Fondos nocturnos
          950: "#0D0D0D", // El negro "Puro" para contraste de fotos
        },
      },
      fontFamily: {
        // La serif da jerarquía y sensación de "Carta de Restaurante"
        heading: ['"Playfair Display Variable"', "serif"],
        // La sans para legibilidad perfecta en precios y menús
        body: ['"Inter"', "sans-serif"],
      },
      backgroundImage: {
        "hero-gradient":
          "linear-gradient(to bottom, rgba(0,0,0,0.5), rgba(0,0,0,0.8))",
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"), // Útil si usamos MDX para el Menú
  ],
};
