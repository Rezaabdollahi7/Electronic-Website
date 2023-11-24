/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./*.{html,js}",
  ],
  theme: {
    extend: {
      spacing: {
        '112': '28rem',
        '128': '32rem',
        '144': '36rem',
        '160': '40rem',
      },
      colors: {

        'item-bg-1': '#facc15',
        'item-bg-2': '#030712',
        'item-text-1': '#facc15',
        'item-text-2': '#030712',

      },
    },
  },

}

