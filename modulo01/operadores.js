/* Operadores de comparação 

> Maior
< Menor
>= Maior igual a 
<= Menor igual a 
== Igual a 
=== Igual e do mesmo tipo (extamaente igualzinho)
!= Diferente de 
!== Diferente, inclusive do tipo

&& "E" se refere as duas condições
|| "OU" se refere a uma ou outra
! "NÃO" nega uma condição

*  Multiplicação
/  Divisão
% Resto da divisão
+ Adição
- Subtração

*/

/*console.log( 4 == "4") // true
console.log( 4 === "4") // false
console.log( 4 != "5") // true
console.log( 4 !== "5") // true*/

// DESAFIO 1
// verificar se a pessoa é maior de 18 anos
// se sim, deixar entrar, se não bloquear entrada
// se a pessoa tiver 17 anos 
// avisar para voltar quando fizer

const idade = 18
if(!(idade >= 18) || idade === 17){
    console.log('Deixar entrar')
} else {
    console.log('Bloquear a entrada')
}




console.log(5 == 5 && 6 == 6) // true
console.log(5 == 7 && 6 == 6) // false

console.log(5 == 5 || 6 == 6) // true
console.log(5 == 5 || 6 != 6) // true

console.log( 2 * 2) //4
console.log( 2 / 2) // 1
console.log( 2 % 1.5) // 0.5
console.log( 2 + 2) // 4
console.log( 2 - 2) // 0