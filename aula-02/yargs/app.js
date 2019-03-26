const yargs = require ('yargs');

const pkg = require ('./package.json');

const argv = yargs
  .options ({
    n: {
      demandOption: true,

      alias: 'nome',

      describe: ' nome e imprimir',

      string: true,
    },

    i: {
      demandOption: true,

      alias: 'idade',

      describe: ' idade e imprimir',

      number: true,
    },

    x: {
      demandOption: false,

      alias: 'xxx',

      describe: 'imprime blá',

      nargs: 0,
    },
  })
  .help ()
  .alias ('help', 'h').argv;

var nome = argv.nome;

var idade = argv.idade;

console.log ('nome:', nome, 'idade:', idade);

if (argv.x != null) {
  console.log ('bla');
}