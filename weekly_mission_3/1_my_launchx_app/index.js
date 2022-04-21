const MissionCommander = require('./app/MissionCommander')

const mcOnboarding = new MissionCommander('Fer')
const mcFrontEnd = new MissionCommander('Rodrigo')
const mcBackEnd = new MissionCommander('Carlo')

console.log('Los commander \n'+mcOnboarding.name+'\n'+mcFrontEnd.name+'\n'+mcBackEnd.name)