import type { Config } from 'tailwindcss';

export default {
  content: ['./app/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        fallo: {
          black: '#0a0a0a',
          charcoal: '#141414',
          graphite: '#1e1e1e',
          smoke: '#2a2a2a',
          khaki: '#b5a27f',
          sand: '#c8b89a',
          cream: '#f0ebe2',
          gold: '#c9a96e',
          champagne: '#d4af7a',
          white: '#ffffff',
          muted: '#8a8a8a',
        },
      },
      fontFamily: {
        display: ['Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
        label: ['Montserrat', 'system-ui', 'sans-serif'],
      },
      maxWidth: {
        container: '1440px',
      },
      spacing: {
        section: '6rem',
        'section-md': '8rem',
        'section-lg': '10rem',
      },
      borderRadius: {
        sm: '4px',
      },
      animation: {
        marquee: 'marquee 30s linear infinite',
        'bounce-slow': 'bounce 3s infinite',
      },
      animationPlayState: {
        paused: 'paused',
        running: 'running',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
  ],
} satisfies Config;
