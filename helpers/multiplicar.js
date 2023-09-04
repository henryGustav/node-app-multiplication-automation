const fs = require('fs')
require('colors')

const crearArchivo = async (base = 5, list, hasta) => {
  try {
    let outputToPrint = ''
    let outputToSave = ''
    for (let index = 1; index <= hasta; index++) {
      outputToPrint += `${base} ${'X'.cyan} ${index} ${'='.cyan}  ${
        (base * index).toString().yellow.bold
      }\n`

      outputToSave += `${base} ${'X'} ${index} ${'='}  ${base * index}\n`
    }

    if (list) {
      console.log('**************************'.bgWhite)
      console.log(`       TABLA DE ${base}        `.green.inverse)
      console.log('**************************'.bgWhite)
      console.log(outputToPrint)
    }
    // fs.writeFileSync(`./exit/tabla-${base}.txt`, salida)
    fs.writeFileSync(`./output/tabla-${base}.txt`, outputToSave)
    return `tabla-${base}.txt`

    //   console.log('file created')
  } catch (error) {
    throw error
  }
}

module.exports = { crearArchivo }
