import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          950: '#022c22',
          900: '#064e3b',
          800: '#065f46',
          700: '#047857',
          600: '#059669',
          500: '#10b981',
          400: '#34d399',
          200: '#a7f3d0',
          100: '#d1fae5',
          50: '#ecfdf5',
        },
        accent: {
          950: '#451a03',
          900: '#78350f',
          800: '#92400e',
          700: '#b45309',
          600: '#d97706',
          500: '#f59e0b',
          400: '#fbbf24',
          200: '#fde68a',
          100: '#fef3c7',
          50: '#fffbeb',
        },
        slate: {
          950: '#020617',
          900: '#0f172a',
          800: '#1e293b',
          700: '#334155',
          600: '#475569',
          500: '#64748b',
          400: '#94a3b8',
          300: '#cbd5e1',
          200: '#e2e8f0',
          100: '#f1f5f9',
          50: '#f8fafc',
        },
      },
      fontFamily: {
        heading: ['"Plus Jakarta Sans"', 'sans-serif'],
        body: ['"Inter"', 'sans-serif'],
      },
      backgroundImage: {
        'brand-gradient': 'linear-gradient(135deg, #064e3b 0%, #059669 50%, #2563eb 100%)',
        'brand-gradient-r': 'linear-gradient(225deg, #064e3b 0%, #059669 50%, #2563eb 100%)',
        'text-gradient': 'linear-gradient(90deg, #059669 0%, #2563eb 100%)',
        'emerald-blue-gradient': 'linear-gradient(135deg, #059669 0%, #2563eb 100%)',
        'emerald-gradient': 'linear-gradient(135deg, #064e3b 0%, #10b981 100%)',
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'hero-mesh': 'radial-gradient(ellipse at 20% 30%, rgba(5,150,105,0.12) 0%, transparent 60%), radial-gradient(ellipse at 80% 70%, rgba(37,99,235,0.10) 0%, transparent 60%)',
      },
      animation: {
        'float-slow': 'floatSlow 8s ease-in-out infinite',
        'float-medium': 'floatMedium 6s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 3s ease-in-out infinite',
        'spin-slow': 'spin 20s linear infinite',
        'bounce-gentle': 'bounceGentle 2s ease-in-out infinite',
        'draw-line': 'drawLine 1.5s ease-out forwards',
        'marquee': 'marquee 30s linear infinite',
        'blob-shift': 'blobShift 10s ease-in-out infinite',
      },
      keyframes: {
        floatSlow: {
          '0%,100%': { transform: 'translateY(0px) rotate(0deg)' },
          '33%': { transform: 'translateY(-18px) rotate(1deg)' },
          '66%': { transform: 'translateY(-8px) rotate(-1deg)' },
        },
        floatMedium: {
          '0%,100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        pulseGlow: {
          '0%,100%': { boxShadow: '0 0 20px rgba(5,150,105,0.3)' },
          '50%': { boxShadow: '0 0 40px rgba(5,150,105,0.6), 0 0 60px rgba(217,119,6,0.2)' },
        },
        bounceGentle: {
          '0%,100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(8px)' },
        },
        drawLine: {
          'from': { strokeDashoffset: '1000' },
          'to': { strokeDashoffset: '0' },
        },
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        blobShift: {
          '0%,100%': { borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%', transform: 'scale(1)' },
          '50%': { borderRadius: '30% 60% 70% 40% / 50% 60% 30% 60%', transform: 'scale(1.08)' },
        },
      },
      boxShadow: {
        'card': '0 4px 24px rgba(0, 0, 0, 0.06)',
        'card-hover': '0 16px 48px rgba(5, 150, 105, 0.15)',
        'emerald': '0 8px 32px rgba(5, 150, 105, 0.25)',
        'amber': '0 8px 32px rgba(217, 119, 6, 0.25)',
        'glow-sm': '0 0 16px rgba(5, 150, 105, 0.35)',
        'glow-lg': '0 0 40px rgba(5, 150, 105, 0.4)',
      },
    },
  },
  plugins: [],
}

export default config
