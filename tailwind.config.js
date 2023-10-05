/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    
  ],
  theme: {
    extend: {
      fontFamily: {
        'corben': ['Corben', 'cursive','sans-serif'],//'Corben', cursive;font-family: 'Orbitron', sans-serif;
        'orbitron': ['Orbitron','sans-serif'],//'Orbit
      },
    },
  },
  plugins: [
  
  ],
}

