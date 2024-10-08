/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'move-left': 'infiniteSliderLeft 20s linear infinite',  // Animation for moving left
        'move-right': 'infiniteSliderRight 25s linear infinite', 
        'text-gradient': "text 1.5s linear infinite",
        'flip': "flip 6s infinite steps(2, end)",
        'rotate': "rotate 3s linear infinite both",
      },
      keyframes: {
        infiniteSliderLeft: {
          "0%": { transform: "translateX(0)" },
          "100%": {
            transform: "translateX(-50%)",
          },
        },
        infiniteSliderRight: {
          "0%": { transform: "translateX(-50%)" },
          "100%": {
            transform: "translateX(0)",
          },
        },
        text: {
          to: {
            backgroundPosition: "200% center",
          },
        },
        flip: {
          to: {
            transform: "rotate(360deg)",
          },
        },
        rotate: {
          to: {
            transform: "rotate(90deg)",
          },
        },
      }
    },
  },
  plugins: [],
}
