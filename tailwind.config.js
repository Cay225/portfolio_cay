/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        bg: '#0A0A0C',
        surface: {
          DEFAULT: '#111115',
          2: '#17171C',
        },
        line: {
          DEFAULT: '#24242C',
          strong: '#34343F',
        },
        fg: '#F4F2EC',
        muted: '#9B9BA7',
        faint: '#6A6A76',
        accent: {
          DEFAULT: '#7B93FF',
          strong: '#5A75F5',
          soft: 'rgba(123,147,255,0.12)',
        },
      },
      fontFamily: {
        display: ['"Inter Tight"', 'Inter', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
        serif: ['"Instrument Serif"', 'Georgia', 'serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      maxWidth: {
        content: '1240px',
      },
      keyframes: {
        marquee: {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        marquee: 'marquee 40s linear infinite',
      },
    },
  },
  plugins: [],
}
