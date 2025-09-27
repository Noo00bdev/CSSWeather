/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"], // scan tous tes fichiers HTML & JS
  theme: {
    extend: {
      colors: {
        ciel: '#87ceeb',      // bleu ciel
        soleil: '#f9d71c',    // jaune soleil
        nuage: '#f0f0f0',     // gris clair
        nuit: '#1e3c72',      // bleu nuit
        texte: '#333333',     // texte foncé
        blanc: '#ffffff',     // blanc
        ombre: 'rgba(0,0,0,0.15)', // ombre
        chaud: '#ff7e5f',     // orange chaud
        froid: '#00c6ff',     // bleu froid
        pluie: '#4a90e2',     // bleu pluie
      },
    },
  },
  safelist: [
    "bg-ciel",
    "bg-soleil",
    "bg-nuage",
    "bg-nuit",
    "text-texte",
    "text-blanc",
    "bg-chaud",
    "bg-froid",
    "bg-pluie"
  ],
  plugins: [],
};
