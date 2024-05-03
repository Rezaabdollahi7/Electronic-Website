/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./*.{html,js}",
  ],
  theme: {
    extend: {
      width: {
        'mycontainer': '85%',
      },
      spacing: {
        'space-sections' :'15rem',
        '112': '28rem',
        '128': '32rem',
        '144': '36rem',
        '160': '40rem',
      },
      colors: {

        'item-bg-1': '#facc15',
        'item-bg-2': '#6b21a8',
        'item-text-1': '#facc15',
        'item-text-2': '#030712',
        'item-text-3': '#ffffff',
        'nav-items-color': '#64748b',
        'nav-icons-color': '#64748b',
        'art-tittle': '#0284c7',
        'art-tittle-bg': '#bae6fd',
        'art-desc': '#64748b',
        'art-share': '#fb7185',
        'art-author': '#4f46e5',
        'fea-bg': '#8c52ff',
        'special-item-back': '#212733',
        'special-wrapper-back': '#081A24',

        'main': {
          '50': '#ecfcff',
          '100': '#cff7fe',
          '200': '#a5effc',
          '300': '#67e4f9',
          '400': '#22d0ee',
          '500': '#06b6d4',
          '600': '#0899b2',
          '700': '#0e7d90',
          '800': '#156775',
          '900': '#165863',
          '950': '#083b44',
        },

      },
      screens: {
        '300px': '300px',
        '350px': '350px',
        '400px': '400px',
        '450px': '450px',
        '500px': '500px',
        '550px': '550px',
        '600px': '600px',
        '650px': '650px',
        '700px': '700px',
        '750px': '750px',
        '800px': '800px',
        '850px': '850px',
        '900px': '900px',
        '950px': '950px',
        '1000px': '1000px',
        '1050px': '1050px',
        '1100px': '1100px',
        '1150px': '1150px',
        '1200px': '1200px',
        '1250px': '1250px',
        '1300px': '1300px',
        '1350px': '1350px',
        '1400px': '1400px',
        '1450px': '1450px',
      },
      fontFamily: {
        dana: ["dana", "sans-serif"],
        iransansx: ["IRANSansX", "sans-serif"],
  
      } 
    },
  },

}

