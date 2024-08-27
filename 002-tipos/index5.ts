// Enum

enum EMes {
    JAN = 'Janeiro',
    FEV = 'Fevereiro',
    MAR = 'Março'
}

const person: {nome: string, mesaniversario: string} = {
    nome: 'Henrique',
    mesaniversario: EMes.FEV,
};

if(person.mesaniversario == EMes.MAR){
    console.log(person);
}else{
    console.log("Não estou encontrando o dado desejado");
}
