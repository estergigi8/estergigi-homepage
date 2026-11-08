import type { Config } from "tailwindcss";

// Breakpoints match the original Elementor site:
// mobile = default (<768px), tablet = md (768–1024px), desktop = lg (≥1025px)
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    screens: {
      md: "768px",
      lg: "1025px",
    },
    extend: {
      colors: {
        brand: {
          pink: "#FF7BA5", // Kit: secondary
          "pink-2": "#FF75B5", // Kit: global color
          "pink-3": "#F562A6",
          rose: "#D4537E", // timeline
          "card-1": "#F392BF",
          "card-3": "#D93782",
          // Accessible pink: white text on it, or it on white, passes 4.5:1 (the lighter brand pinks don't)
          "pink-dark": "#D93782",
          purple: "#AE52FF",
          olive: "#8BA404",
          "intro-bg": "#F8F8F8",
          scroll: "#FF78B7",
          email: "#378ADD",
          phone: "#1D9E75",
          whatsapp: "#25D366",
        },
      },
      fontFamily: {
        // The three custom fonts used by the original page
        dak: ['"Open Sans דק"', "sans-serif"],
        beinoni: ['"Open Sans בינוני"', "sans-serif"],
        ava: ['"Open Sans עבה"', "sans-serif"],
        roboto: ["Roboto", "sans-serif"],
      },
      boxShadow: {
        glow: "0px 0px 20px 0px rgba(223, 48, 169, 0.49)",
      },
    },
  },
  plugins: [],
} satisfies Config;
