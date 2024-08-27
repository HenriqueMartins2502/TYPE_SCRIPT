// Métodos 

class Pessoas {
    nome: string = '';
    idade: number = 18;
    homem: boolean = true;
    comida: string = 'lanche de franguinho';

    constructor(nome: string, idade: number, homem: boolean) {
        this.nome = nome;
        this.idade = idade;
        this.homem = homem;
    }

    comer(comidas: string) {
        return `O ${this.nome} comeu a ${comidas}`;
    }

    fezAniver() {
        return `O ${this.nome} fez ${this.idade + 1} anos`;
    }
}

const Pessoa2 = new Pessoas('Henrique Martins', 18, true);
console.log(Pessoa2.comer('Feijoada'));
console.log(Pessoa2.fezAniver());
