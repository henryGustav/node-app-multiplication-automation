const argv = require('./config/yargs')
const { crearArchivo } = require('./helpers/multiplicar')

console.clear()
// let base = 10

// console.log(process.argv)
console.log(argv)
// console.log('base:', argv.base)

// const [, , arg3 = 'base=5'] = process.argv
// const [, base = 5] = arg3.split('=')

crearArchivo(argv.b, argv.l, argv.h)
  .then((fileCreated) => console.log({ fileCreated }))
  .catch((err) => console.log('ERROR AL GRABAR::', err))
