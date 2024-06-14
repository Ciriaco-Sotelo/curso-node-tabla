const { crearArchivo } = require('./helpers/multiplicar');
const argv = require('./config/yargs');
require('colors');

console.clear();

//* Referencias futuras
// console.log(argv)
// console.log(process.argv)
// console.log('base: yargs -> ', argv.b );
// const [ , , arg3 = 'base = 5' ] = process.argv;
// const [ , base = 5] = arg3.split('=');
//* Fin referencias

crearArchivo( argv.b, argv.h, argv.l )
    .then( nombreArchivo => console.log(nombreArchivo.rainbow, 'creado'))
    .catch( err => console.log(err));


