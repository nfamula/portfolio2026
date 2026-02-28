module.exports = {
  content: ["./app/**/*.{ts,tsx,js,jsx}", "./components/**/*.{ts,tsx,js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        heading: [
          "var(--font-heading)",
          "Georgia",
          "Times New Roman",
          "Times",
          "serif",
        ],
        body: [
          "var(--font-body)",
          "Georgia",
          "Times New Roman",
          "Times",
          "serif",
        ],
        accent: [
          "var(--font-accent)",
          "Georgia",
          "Times New Roman",
          "Times",
          "serif",
        ],
      },
    },
  },
  plugins: [],
};
