// Getters e Setters
// O método getter retorna o seu valor, enquanto o método setter retorna ou atualiza

class Pearson {
    nome: string = '';
    idade: number = 0;
    homem: boolean = true

    constructor(nome: string, idade: number, homem: boolean) {
        this.nome = nome;
        this.idade = idade;
    }

    comer(comidas: string) {
        return `O ${this.nome} comeu a ${comidas}`;
    }

    fezAniver() {
        return `O ${this.nome} fez ${this.idade + 1} anos`;
    }
}

class Henri extends Pearson {
    private _profissao: string = 'Programador';

    constructor(){
        super('Henrique', 31, true);
    }

    get profissao(){
        return this._profissao;
    }

    set profissao(valor: string){
        this._profissao = valor;
    }
}

const peaple = new Henri();
console.log(peaple.profissao); //get
peaple.profissao = 'Piloto da NASA'; //set
console.log(peaple.profissao); //get novamente
