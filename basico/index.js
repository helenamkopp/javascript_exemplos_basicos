// Criar um programa que calcula a média 
// das notas entre os alunos e envia
// mensagem do calculo da média.
// Se a média for maior que 5 parabenizar a turma

const aluno01 = 'Helena'
const notaAluno01 = 2

const aluno02 = 'Romulo'
const notaAluno02 = 2

const aluno03 = 'Silvia'
const notaAluno03 = 2

const media = (notaAluno01 + notaAluno02 + notaAluno03) / 3


if (media > 5){
    console.log(`A nota foi de ${media} ! PARABÉNS !!`)
} else {
    console.log('A média é menor que 5.. vocês precisam estudar mais.')
}

