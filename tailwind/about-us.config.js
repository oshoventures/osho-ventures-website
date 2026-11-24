// Tailwind config for about-us.html. Rebuild with: npm run build:css
module.exports = {
  content: ["./about-us.html"],
  theme: {
    "extend": {
      "colors": {
        "brand": {
          "canvas": "#fbf9f4",
          "surface": "#f5f3ec",
          "card": "#f8f6f0",
          "border": "#dcd9d1",
          "dark": "#07160d",
          "darkSurface": "#0e2216",
          "greenAccent": "#68a120",
          "electricLime": "#b7f569",
          "muted": "#626860",
          "techMuted": "#8b9289"
        }
      },
      "fontFamily": {
        "sans": [
          "Inter",
          "sans-serif"
        ],
        "mono": [
          "JetBrains Mono",
          "monospace"
        ]
      }
    }
  },
  plugins: [require("@tailwindcss/forms"), require("@tailwindcss/container-queries")],
};
