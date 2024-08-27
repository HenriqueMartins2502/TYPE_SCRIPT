// Interfaces
interface IPessoa {
    nome: string;
    idade: number;
    readonly cpf: number;
    enabled(): boolean
}

let pessoa: IPessoa = {
    nome: 'henri',
    idade: 18,
    cpf: 4356757575,
    enabled(){
        return true;
    },
};

class Joao implements IPessoa {
    nome: string = 'Joao';
    idade: number = 13 ;
    readonly cpf: number = 11111;
    enabled(): boolean {
        return true;
    }
};
