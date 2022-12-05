const moi = require('./information');
const cowsay = require("cowsay");
console.log(cowsay.say({
    text : `Hello I'm ${moi.nom} from ${moi.campus}!`,
    e : 'xx',
    T : 'U' 
}))