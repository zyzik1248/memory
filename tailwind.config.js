module.exports = {
  mode: "jit",
  purge: ["./src/**/*.{js,jsx,ts,tsx}"],
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
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
      ],
    },
  },
};
