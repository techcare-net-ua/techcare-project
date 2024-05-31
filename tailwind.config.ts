import gridAreas from '@savvywombat/tailwindcss-grid-areas';
import type { Config } from 'tailwindcss';
import { fontFamily } from 'tailwindcss/defaultTheme';
import tailwindcssAnimate from 'tailwindcss-animate';

const config: Config = {
  content: [
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'selector',
  theme: {
    supports: {
      grid: 'display: grid',
    },
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
      print: { raw: 'print' },
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        // sm: "2rem",
        // lg: "4rem",
        // xl: "5rem",
        // "2xl": "6rem",
      },
    },
    extend: {
      colors: {
        test: 'yellow',
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive) / <alpha-value>)',
          foreground: 'hsl(var(--destructive-foreground) / <alpha-value>)',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
      },
      borderRadius: {
        xl: `calc(var(--radius) + 4px)`,
        lg: `var(--radius)`,
        md: `calc(var(--radius) - 2px)`,
        sm: 'calc(var(--radius) - 4px)',
      },
      fontFamily: {
        sans: ['var(--font-geist-sans)', ...fontFamily.sans],
        // mono: ["var(--font-mono)", ...fontFamily.mono],
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
        'custom-fade-in-rtl': {
          '0%': { transform: 'translateX(10px)' },
          '100%': { opacity: 'translateX(0%)' },
        },
        'custom-opacity01': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        'show-opacity01': 'custom-opacity01 0.2s ease-in',
        'show-rtl': 'custom-fade-in-rtl 0.2s ease-in',
      },

      gridTemplateAreas: {
        'base-layout': ['header', 'main', 'footer'],
        dashboard: ['aside sections'],
      },
      gridTemplateColumns: {
        'base-layout': '1fr',
        dashboard: 'auto 1fr',
      },
      gridTemplateRows: {
        'base-layout': 'auto 1fr auto',
        dashboard: 'auto',
      },
    },
  },
  plugins: [tailwindcssAnimate, gridAreas],
};
export default config;
