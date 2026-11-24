// Tailwind config for book-a-call.html. Rebuild with: npm run build:css
module.exports = {
  content: ["./book-a-call.html"],
  theme: {
    "extend": {
      "colors": {
        "tertiary-fixed-dim": "#9dd850",
        "tertiary-fixed": "#b7f569",
        "inverse-primary": "#b8cbbc",
        "tertiary": "#0a1600",
        "background": "#fbf9f4",
        "tertiary-container": "#192d00",
        "on-tertiary-fixed": "#102000",
        "primary-fixed": "#d4e7d8",
        "on-tertiary-container": "#679e18",
        "secondary": "#605e57",
        "error": "#ba1a1a",
        "primary": "#07160d",
        "surface-container-low": "#f5f3ee",
        "on-primary": "#ffffff",
        "inverse-on-surface": "#f2f1ec",
        "surface-dim": "#dbdad5",
        "outline-variant": "#c3c8c2",
        "on-tertiary": "#ffffff",
        "on-background": "#1b1c19",
        "outline": "#737873",
        "on-secondary-fixed-variant": "#484740",
        "on-secondary-fixed": "#1c1c16",
        "surface-container-highest": "#e4e2dd",
        "on-surface": "#1b1c19",
        "on-error-container": "#93000a",
        "secondary-container": "#e3dfd6",
        "inverse-surface": "#30312e",
        "surface-tint": "#516256",
        "on-primary-fixed": "#0f1f15",
        "on-primary-container": "#819386",
        "on-secondary-container": "#64635b",
        "surface": "#fbf9f4",
        "primary-container": "#1b2b21",
        "surface-bright": "#fbf9f4",
        "surface-variant": "#e4e2dd",
        "secondary-fixed": "#e6e2d9",
        "on-error": "#ffffff",
        "surface-container-high": "#eae8e3",
        "surface-container-lowest": "#ffffff",
        "primary-fixed-dim": "#b8cbbc",
        "error-container": "#ffdad6",
        "secondary-fixed-dim": "#c9c6bd",
        "on-surface-variant": "#434844",
        "on-primary-fixed-variant": "#3a4b3f",
        "on-secondary": "#ffffff",
        "surface-container": "#f0eee9",
        "on-tertiary-fixed-variant": "#304f00"
      },
      "borderRadius": {
        "DEFAULT": "0.25rem",
        "lg": "0.5rem",
        "xl": "0.75rem",
        "full": "9999px"
      },
      "spacing": {
        "gutter": "32px",
        "unit": "8px",
        "margin-mobile": "24px",
        "technical-line-weight": "1px",
        "margin-desktop": "80px",
        "container-max": "1600px"
      },
      "fontFamily": {
        "label-technical": [
          "JetBrains Mono"
        ],
        "label-sm": [
          "Inter"
        ],
        "headline-md": [
          "Hanken Grotesk"
        ],
        "headline-lg-mobile": [
          "Hanken Grotesk"
        ],
        "body-lg": [
          "Inter"
        ],
        "headline-lg": [
          "Hanken Grotesk"
        ],
        "display-xl": [
          "Hanken Grotesk"
        ],
        "body-md": [
          "Inter"
        ]
      },
      "fontSize": {
        "label-technical": [
          "12px",
          {
            "lineHeight": "16px",
            "letterSpacing": "0.1em",
            "fontWeight": "500"
          }
        ],
        "label-sm": [
          "11px",
          {
            "lineHeight": "14px",
            "fontWeight": "600"
          }
        ],
        "headline-md": [
          "32px",
          {
            "lineHeight": "40px",
            "fontWeight": "500"
          }
        ],
        "headline-lg-mobile": [
          "40px",
          {
            "lineHeight": "48px",
            "letterSpacing": "-0.02em",
            "fontWeight": "600"
          }
        ],
        "body-lg": [
          "18px",
          {
            "lineHeight": "28px",
            "fontWeight": "400"
          }
        ],
        "headline-lg": [
          "64px",
          {
            "lineHeight": "72px",
            "letterSpacing": "-0.02em",
            "fontWeight": "600"
          }
        ],
        "display-xl": [
          "120px",
          {
            "lineHeight": "110px",
            "letterSpacing": "-0.04em",
            "fontWeight": "700"
          }
        ],
        "body-md": [
          "16px",
          {
            "lineHeight": "24px",
            "fontWeight": "400"
          }
        ]
      }
    }
  },
  plugins: [require("@tailwindcss/forms"), require("@tailwindcss/container-queries")],
};
