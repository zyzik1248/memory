module.exports = {
  mode: "jit",
  purge: ["./src/**/*.{js,jsx,ts,tsx}"],
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        hide: {
          "0%": { opacity: "1" },
          "100%": { opacity: "0" },
        },
        show: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
      animation: {
        hide: "hide 0.5s ease-in-out",
        show: "show 1s ease-in-out"
      },
    },
  },
  plugins: [],
  purge: {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    options: {
      safelist: [
        ...Array(9)
          .fill("")
          .map((el, i) => `bg-yellow-${100 + i * 100}`),
        ...Array(9)
          .fill("")
          .map((el, i) => `bg-green-${100 + i * 100}`),
        ...Array(9)
          .fill("")
          .map((el, i) => `bg-red-${100 + i * 100}`),
        ...Array(9)
          .fill("")
          .map((el, i) => `bg-blue-${100 + i * 100}`),
        "hidden",
      ],
    },
  },
};
