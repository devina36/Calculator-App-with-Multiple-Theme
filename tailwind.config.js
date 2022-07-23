module.exports = {
  content: ["index.html",
            "./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        blmain: 'hsl(222, 26%, 31%)',
        bltoggle: 'hsl(223, 31%, 20%)',
        blscreen: 'hsl(224, 36%, 15%)',
        blkeyb: 'hsl(225, 21%, 49%)',
        blkeybsh: 'hsl(224, 28%, 35%)',
        blred: 'hsl(6, 63%, 50%)',
        bldarkred: 'hsl(6, 70%, 34%)',
        blkeyw: 'hsl(30, 25%, 89%)',
        blkeywsh: 'hsl(28, 16%, 65%)',
        bltext: 'hsl(221, 14%, 31%)',
        ormain: 'hsl(0, 0%, 90%)',
        ortoggle: 'hsl(0, 5%, 81%)',
        orscreen: 'hsl(0, 0%, 93%)',
        orkeyb: 'hsl(185, 42%, 37%)',
        orkeybsh: 'hsl(185, 58%, 25%)',
        orred: 'hsl(25, 98%, 40%)',
        ordarkred: 'hsl(25, 99%, 27%)',
        orkeyw: 'hsl(45, 7%, 89%)',
        orkeywsh: 'hsl(35, 11%, 61%)',
        ortext: 'hsl(60, 10%, 19%)',
        prlmain: 'hsl(268, 75%, 9%)',
        prltoggle: 'hsl(268, 71%, 12%)',
        prlscreen: 'hsl(268, 71%, 12%)',
        prlkeyb: 'hsl(281, 89%, 26%)',
        prlkeybsh: 'hsl(285, 91%, 52%)',
        prlred: 'hsl(176, 100%, 44%)',
        prldarkred: 'hsl(177, 92%, 70%)',
        prlkeyw: 'hsl(268, 47%, 21%)',
        prlkeywsh: 'hsl(290, 70%, 36%)',
        prltext: 'hsl(52, 100%, 62%)',
        prltext2: 'hsl(198, 20%, 13%)'
      },
      fontFamily: {
        spartan: ['League Spartan', 'sans-serif']
      },
      boxShadow: {
        bt: "0 4px 0 0 hsl(28, 16%, 65%)"
      }
    },
  },
  plugins: [],
}