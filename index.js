// Criar um programa que calcula a média 
// das notas entre os alunos e envia
// mensagem do calculo da média.
// Se a média for maior que 5 parabenizar a turma
// array ou vetores - coleção de valores agrupados em uma única variavel 
const alunos = [
    {
        nome: 'Helena',
        nota: 9.8
    },
    {
        nome: 'Romulo',
        nota: 6
    },
    {
        nome: 'Pedro',
        nota: 8
    }
]

const nomesDeAlunos = ['Helena', 'Pedro', 'Gabriel']

console.log(nomesDeAlunos)

const media = (alunos[0].nota + alunos[1].nota + alunos[2].nota) / 3


if (media > 5){
    console.log(`A nota foi de ${media} ! PARABÉNS !!`)
} else {
    console.log('A média é menor que 5.. vocês precisam estudar mais.')
}

