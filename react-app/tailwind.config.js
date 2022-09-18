/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {

      fontFamily:{
        Ubuntu: "'Ubuntu', sans-serif",
        Catamaran: "'Catamaran', sans-serif",
      },


      keyframes: {
        ForBack: {
          '0%': { transform: 'translateX(0px) translateY(0px)' },
          '50%': { transform: 'translateX(6rem) translateY(-0.75rem)' },
          '100%': { transform: 'translateX(0px) translateY(0px)' }
        },
      },
      animation: {
        'scooter-Motion': 'ForBack 4s ease-in-out infinite',
      },

      colors:
          {
            "wYellow":"#fdcb56",
            "wGreen":"#44b236",
            "wHoverGreen":"#65c15c",
            "MobileBannerBG":"#ECFFEC",
            "QRBanner": "#def8de"
          }

    },
  },
  plugins: [ require('@tailwindcss/forms'),],
}