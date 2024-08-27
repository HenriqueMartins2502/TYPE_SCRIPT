// Modificadores de acesso

//public- pode ser acesssado pela mesma classe, classes filhas e outras classes
//protected- pode ser acessado pela mesma classe e classes filhas
//private- pode ser acessado apenas pela mesma classe(pode ser encontrado com um _ antes como é o caso do _comida)

class Pessoas1 {
    private nome: string = '';
    private idade: number = 18;
    private homem: boolean = true;
    private _comida: string = 'lanche de franguinho';

    constructor(nome: string, idade: number, homem: boolean) {
        this.nome = nome;
        this.idade = idade;
        this.homem = homem;
    }

    public comer(comidas: string) {
        return `O ${this.nome} comeu a ${comidas}`;
    }

    protected fezAniver() {
        return `O ${this.nome} fez ${this.idade + 1} anos`;
    }
}
