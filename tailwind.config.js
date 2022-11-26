/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['NeutralFaceRegular', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        'mono': ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        'serif': ['NeutralFaceBold', 'ui-sans-serif', 'system-ui', 'sans-serif']
      },
      colors: {
        'beige': '#FCF6F2',
        'black-100': '#312B2B',
      },
      fontSize: {
        '3.5xl': '32px',
        '4.5xl': '40px',
        '7.5xl': '80px',
      },
      lineHeight: {
        'snug': '1.3',
        'tight': '1.2'
      }
    },
  },
  plugins: [],
}
