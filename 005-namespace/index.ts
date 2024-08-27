// Namespaces aninhados 

namespace Pessoa{
    export namespace Pessoa1 {
        export let nome: string = 'João';
   
         export function calc(): number{
           return 1 + 1;
         }
   };
   
   console.log(Pessoa1.nome);
   console.log(Pessoa1.calc());

    export namespace Pessoa2 {
        export let nome: string = 'João';

        export function calc(): number{
        return 1 + 1;
     }
};

console.log(Pessoa1.nome);
console.log(Pessoa1.calc());
}
