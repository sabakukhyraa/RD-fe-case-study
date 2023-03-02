/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["HankenGrotesk", "sans-serif"],
        dmsans: ["DMSans", "sans-serif"],
        roboto: ["Roboto", "sans-serif"]
      },
      colors: {
        active: {
          green: "#34B53A",
          blue: "#02A0FC",
          indigo: "#4339F2",
          yellow: "#FFB200",
          red: "#FF3A29",
        },
        secondary: {
          DEFAULT: "#F8F8F8",
          dark: "#231F20",
        },
        chart: {
          0: {
            light: "#E2FBD7",
            dark: "#34B53A",
          },
          1: {
            light: "#DAD7FE",
            dark: "#4339F2",
          },
          2: {
            light: "#FFE5D3",
            dark: "#FF3A29",
          },
          3: {
            light: "#CCF8FE",
            dark: "#02A0FC",
          },
        },
      },
    },
  },
  plugins: [],
};
