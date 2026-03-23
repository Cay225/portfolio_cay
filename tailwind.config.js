/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        blue:      '#4F8EF7',
        'blue-d':  '#2563EB',
        'blue-g':  '#93C5FD',
        dark:      '#0A0E1A',
        'dark-2':  '#0F1629',
        'dark-3':  '#1A2035',
        'dark-4':  '#242B42',
        light:     '#F8FAFF',
        'text-m':  '#94A3B8',
        'text-s':  '#CBD5E1',
      },
      fontFamily: {
        mono:  ['JetBrains Mono', 'Fira Code', 'monospace'],
        sans:  ['Inter', 'sans-serif'],
        syne:  ['Syne', 'sans-serif'],
      },
      keyframes: {
        fadeUp:   { from:{opacity:'0',transform:'translateY(20px)'}, to:{opacity:'1',transform:'translateY(0)'} },
        fadeIn:   { from:{opacity:'0'}, to:{opacity:'1'} },
        blink:    { '0%,100%':{opacity:'1'}, '50%':{opacity:'0'} },
        float:    { '0%,100%':{transform:'translateY(0)'}, '50%':{transform:'translateY(-10px)'} },
        glow:     { '0%,100%':{boxShadow:'0 0 20px rgba(79,142,247,.3)'}, '50%':{boxShadow:'0 0 40px rgba(79,142,247,.6)'} },
        scanline: { '0%':{transform:'translateY(-100%)'}, '100%':{transform:'translateY(100vh)'} },
        particle: { '0%':{transform:'translate(0,0)',opacity:'1'}, '100%':{transform:'translate(var(--tx),var(--ty))',opacity:'0'} },
      },
      animation: {
        'fade-up':  'fadeUp .6s both',
        'fade-1':   'fadeUp .6s .1s both',
        'fade-2':   'fadeUp .6s .2s both',
        'fade-3':   'fadeUp .6s .3s both',
        'fade-4':   'fadeUp .6s .4s both',
        'fade-5':   'fadeUp .6s .5s both',
        blink:      'blink 1s step-end infinite',
        float:      'float 3s ease-in-out infinite',
        glow:       'glow 2s ease-in-out infinite',
        scanline:   'scanline 8s linear infinite',
      },
    },
  },
  plugins: [],
}
