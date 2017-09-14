import logger from './logger';
import Pessoa from './pessoa';

logger.info("Usando o CommonsJS!");

const pessoa = {
    nome: 'fulano',
    idade: 15,
    foobar: 'bla'
}

function clone(object) {
    return { ...object };
}

//const pessoa = new Pessoa('Vitor');
const clonePessoa = clone(pessoa);
clonePessoa.nome = 'foobar'
clonePessoa.idade = 10

console.log(clonePessoa);
console.log(pessoa);