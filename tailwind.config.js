/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      backgroundImage:{
        'background-pattern' : "url('/pattern.svg')",
        'menu-border-pattern' : "url('/border_pattern2.svg')"
      },
      colors:{
        whiteSnow : '#FDFEFD',
        borderColor:'#CAC6C1',
        'moss': {
          300: '#77C27A'
        },
        'wood': {
          300:'#F3E8D7',
          400:'#D0BFA5',
          600:'#846639',
          800:'#613F19',
        }

      },
      fontFamily:{
        "poppins":["Poppins","sans-serif"]
      }
    },
  },
  plugins: [],
}

