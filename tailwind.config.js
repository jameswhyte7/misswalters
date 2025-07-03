/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      keyframes: {
        fadeInUp: {
          "0%": {
            opacity: "0",
            transform: "translateY(30px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        marquee: {
          "0%": {
            transform: "translateX(0%)",
          },
          "100%": {
            transform: "translateX(-50%)", // moves only half so second copy fills the loop
          },
        },
      },
      animation: {
        fadeInUp: "fadeInUp 0.8s ease-out forwards",
        marquee: "marquee 20s linear infinite",
      },
    },
  },
  plugins: [require('tailwind-scrollbar-hide')],
};
