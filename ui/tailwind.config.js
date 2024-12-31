/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#1E40AF", // Azul oscuro
        secondary: "#64748B", // Gris azulado
        accent: "#F59E0B", // Amarillo dorado
      },
    },
  },
  plugins: [],
};
