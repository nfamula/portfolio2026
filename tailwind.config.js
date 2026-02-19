module.exports = {
  content: ["./app/**/*.{ts,tsx,js,jsx}", "./components/**/*.{ts,tsx,js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-lexend)", "system-ui", "sans-serif"],
        serif: ["var(--font-zilla-slab)", "Georgia", "serif"],
      },
    },
  },
  plugins: [],
};
