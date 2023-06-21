// 14) Utilize o loop FOR tradicional para percorrer os dois arrays (notas e nomes) e mostrar o nome seguido da nota de cada aluno.

for (i = 0; i < alunos.length; i++) {
    console.log('Aluno: ' + alunos[i]
        + ' - Nota: ' + notas[i])
}

// 15) Utilize o método FOREACH para percorrer o array de notas e mostrar se cada aluno está aprovado (nota >= 7.0)  ou reprovado.

notas.forEach(nota => nota >= 7.0 ? console.log("Aprovado") : console.log("Reprovado"))

// 16) Utilize o método INDEXOF para retornar o índice do elemento "Lucas" no array de nomes.

console.log(alunos.indexOf("Lucas"))

// 17) Utilize o método FINDINDEX para localizar o índice da primeira nota acima de 9.0.

console.log(notas.findIndex(nota => nota > 9.0))

// 18) Utilize o método INCLUDES para verificar se o aluno "Lucas" está na lista.

console.log(alunos.includes("Lucas"))

// 19) Utilize o método REDUCE para calcular a média das notas.

let soma = notas.reduce((media, nota) => media += nota)
let mediaTurma = soma / notas.length
console.log(mediaTurma)

// 20) Utilize o método EVERY para verificar se todas as notas são maiores ou iguais à média.

console.log(notas.every(nota => nota >= mediaTurma))

// 21) Utilize o método SOME para verificar se há notas superiores à media.

console.log(notas.some(nota => nota > mediaTurma))