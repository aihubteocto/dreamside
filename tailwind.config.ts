import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        defbackground: "#272727",
        background: "hsl(var(--background))",
        textgrey: "var(--text-grey)",
        textwhite: "var(--text-white)",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      
      fontWeight: {
        regular: '400',
        medium: '500',
        semibold: '600',
        bold: '700',
      },
      fontSize: {
        // Display sizes
        'display-2xl': ['4.5rem', { lineHeight: '5.625rem', letterSpacing: '-2%' }],
        'display-xl': ['3.75rem', { lineHeight: '4.5rem', letterSpacing: '-2%' }],
        'display-lg': ['3rem', { lineHeight: '3.75rem', letterSpacing: '-2%' }],
        'display-md': ['2.25rem', { lineHeight: '2.75rem', letterSpacing: '-2%' }],
        'display-sm': ['1.875rem', { lineHeight: '2.375rem', letterSpacing: '-2%' }],
        'display-xs': ['1.5rem', { lineHeight: '2rem', letterSpacing: '-2%' }],
        
        // Text sizes
        'text-xl': ['1.25rem', { lineHeight: '1.875rem', letterSpacing: '-2%' }],
        'text-lg': ['1.125rem', { lineHeight: '1.75rem', letterSpacing: '-2%' }],
        'text-md': ['1rem', { lineHeight: '1.5rem', letterSpacing: '-2%' }],
        'text-sm': ['0.875rem', { lineHeight: '1.25rem', letterSpacing: '-2%' }],
        'text-xs': ['0.75rem', { lineHeight: '1.125rem', letterSpacing: '-2%' }],
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;