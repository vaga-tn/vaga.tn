import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
      },
      maxWidth: {
        'customWidth': '1200px',
      },
      animation: {
        // Floating animation for shapes and elements
        'float': 'float 6s ease-in-out infinite',
        'float-slow': 'float 8s ease-in-out infinite',
        'float-delayed': 'float 6s ease-in-out infinite 2s',

        // Slow bounce for stats
        'bounce-slow': 'bounce-slow 3s infinite',
        'bounce-delayed': 'bounce-slow 3s infinite 0.5s',
        'bounce-delayed-2': 'bounce-slow 3s infinite 1s',
        'bounce-delayed-3': 'bounce-slow 3s infinite 1.5s',

        // Gradient animation for backgrounds
        'gradient-shift': 'gradient-shift 15s ease infinite',

        // Fade in animations
        'fade-in-up': 'fade-in-up 0.6s ease-out forwards',
        'fade-in-up-delayed': 'fade-in-up 0.6s ease-out 0.3s forwards',

        // Scale animations
        'scale-in': 'scale-in 0.5s ease-out forwards',

        // Pulse variations
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'pulse-slower': 'pulse 6s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        // Floating motion
        float: {
          '0%, 100%': {
            transform: 'translateY(0px) rotate(0deg)'
          },
          '50%': {
            transform: 'translateY(-20px) rotate(5deg)'
          }
        },

        // Slow bounce for stats
        'bounce-slow': {
          '0%, 100%': {
            transform: 'translateY(-25%)',
            'animation-timing-function': 'cubic-bezier(0.8, 0, 1, 1)'
          },
          '50%': {
            transform: 'translateY(0%)',
            'animation-timing-function': 'cubic-bezier(0, 0, 0.2, 1)'
          }
        },

        // Gradient background animation
        'gradient-shift': {
          '0%': {
            'background-position': '0% 50%'
          },
          '50%': {
            'background-position': '100% 50%'
          },
          '100%': {
            'background-position': '0% 50%'
          }
        },

        // Fade in from bottom
        'fade-in-up': {
          '0%': {
            opacity: '0',
            transform: 'translateY(30px)'
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)'
          }
        },

        // Scale in animation
        'scale-in': {
          '0%': {
            opacity: '0',
            transform: 'scale(0.9)'
          },
          '100%': {
            opacity: '1',
            transform: 'scale(1)'
          }
        }
      },

      // Custom background sizes for gradient animations
      backgroundSize: {
        '300%': '300%',
        '400%': '400%',
      },

      // Extended backdrop blur options
      backdropBlur: {
        'xs': '2px',
        '3xl': '64px',
      },

      // Custom border radius
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem',
      },

      // Custom spacing for floating elements
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },

      // Custom z-index values
      zIndex: {
        '60': '60',
        '70': '70',
        '80': '80',
        '90': '90',
        '100': '100',
      },

      // Extended opacity values
      opacity: {
        '15': '0.15',
        '35': '0.35',
        '65': '0.65',
        '85': '0.85',
      },

      // Custom box shadows with glow effects
      boxShadow: {
        'glow': '0 0 20px rgba(255, 255, 255, 0.1)',
        'glow-lg': '0 0 40px rgba(255, 255, 255, 0.15)',
        'glow-primary': '0 0 30px rgba(13, 138, 255, 0.3)',
        'inner-glow': 'inset 0 0 20px rgba(255, 255, 255, 0.1)',
      },

      // Custom transforms
      scale: {
        '102': '1.02',
        '103': '1.03',
      },

      // Custom blur values
      blur: {
        '4xl': '72px',
      }
    },
  },
  plugins: [],
} satisfies Config;