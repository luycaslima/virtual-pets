/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors:{
        bgColor : '#F2F1EE',
        borderColor:'#CAC6C1',
      },
      backgroundImage: {
        'background-pattern': "url('/background-pattern.svg')",
      },
      fontFamily:{
        "Roboto":["Roboto","sans-serif"],
        "Tektur":["Tektur","sans-serif"]
      }
    },
  },
  plugins: [],
}

