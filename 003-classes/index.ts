// Classes
// Você pode passar o dado antes como na 'comida' ou depois como no 'constructor'
class Pessoa{
    nome: string;
    idade: number;
    homem: boolean;
    comida: string = 'lanche de franguinho';

    constructor(nome: string, idade: number, homem: boolean){
        this.nome = nome;
        this.idade = idade;
        this.homem = homem;
    }
};

const Pessoa1 = new Pessoa('Henrique Martins', 18, true);

console.log(Pessoa1);
console.log(Pessoa1.idade);
