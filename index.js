/*
 * Recuerda: Para usar cualquier módulo necesitas haberlo exportado.
 * Necesitas indicar el path del archivo que vas a importar aquí de la forma que se indica (este varia dependiendo en qué archivo lo importas):
 * */

const MissionCommander = require('./app/missionCommander');

const daniel = new MissionCommander("Daniel");
console.log(daniel.name);

const belinda = new MissionCommander("Belinda");
console.log(belinda.name);

const ismael = new MissionCommander("Ismael");
console.log(ismael.name);