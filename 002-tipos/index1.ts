//Array e objeto

let array1: [string, string] = ['Henrique Martins','teste']; // Apenas dois valores 
let array2: Array<string | number> = ['Henrique Martins', 'teste',989]; // Ilimitados

console.log(array1);
console.log(array2);

let obj1: {nome: string, sobrenome: string, idade: number, deuBom: boolean} = {
    nome: 'Henrique ',
    sobrenome: 'Martins',
    idade: 18,
    deuBom: true
};

console.log(obj1);
