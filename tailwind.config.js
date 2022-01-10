module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        'purple': '0 0 3em 0.5em #7E24F0',
        'orange': '0 0 3em 0.5em #D27723',
        'blue' : '0 0 3em 0.5em #61D9D2',
        'yellow' : '0 0 3em 0.5em #FAFF00',
      },
      colors: {
        'neon-purple': '#7E24F0',
        'neon-orange' : '#D27723',
        'neon-blue' : '#61D9D2',
        'neon-yellow' : '#FAFF00',
      },
    },
    fontFamily:{
      orbitron: ['Orbitron', 'sans-serif']
    }
  },
  plugins: [],
}
