const argv = require('yargs')
  .options({
    b: {
      alias: 'base',
      type: 'number',
      demandOption: true,
      describe:'Is the base of multiplication table'
    },
    l: {
      alias: 'list',
      type: 'boolean',
      default: false,
      describe:'show the table on console'
    },
    h:{
      alias: 'defines up to which number the table will be compiled',
      type: 'number',
      default: 10,
      describe:'define '
    }
  })
  .check((argv, options) => {
    console.log('yargs', argv)

    if (isNaN(argv.b)) {
      throw 'Base must be a number'
    }
    return true
  }).argv


  module.exports =argv