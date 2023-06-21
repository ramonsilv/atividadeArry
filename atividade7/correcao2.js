// 10) Inicialize um novo array vazio.

let notas = []

// 11) Utilize o loop FOR tradicional para adicionar notas de 0 a 10 neste array. A quantidade de notas a serem será igual ao tamanho do array obtido na questão 9, onde cada nota corresponderá a um aluno.

// Math.random() - função que gera números aleatórios entre 0 e 1
// toFixed(n) - função que arredonda número para N casas decimais

// Opção A - Utilizando nota aleatória + PUSH
for (i = 0; i < alunos.length; i++) {
    notas.push(parseFloat((Math.random() * 10).toFixed(1)))
}

// Opção B - Utilizando nota aleatória + variável + PUSH
// for (i = 0; i < alunos.length; i++) {
//     let nota = parseFloat(Math.random()*10).toFixed(1)
//     notas.push(nota)
// }

// Opção C - Utilizando nota aleatória + atribuição direta
// for (i = 0; i < alunos.length; i++) {
//     notas[i] = parseFloat(Math.random()*10).toFixed(1)
// }

// Opção D - Utilizando a mesma nota
// for (i = 0; i < alunos.length; i++) {
//     notas[i] = parseFloat(9.0)
// }

// Opção E - Utilizando nota informada pelo usuário
// for (i = 0; i < alunos.length; i++) {
//     notas[i] = prompt("Digite uma nota: ")
// }

// 12) Utilize o método MAP para adicionar 1.0 ponto à cada nota.

// Opção A - Utilizando IF...ELSE
// notas = notas.map(nota => {
//     if (nota > 9.0) {
//         return parseFloat(10.0)
//     }
//     else {
//         return parseFloat(nota) + 1.0
//     }
// }

// Opção B - Utilizando operador ternário
notas = notas.map(nota => nota > 9.0 ? parseFloat(10.0) : parseFloat(nota) + 1.0)

// 13) Utilize o método FILTER para exibir apenas as notas maiores do que 7.0.

// Opção A - Capturando retorno em variável
// let maiores = notas.filter(nota => nota > 7.0)
// console.log(maiores)

// Opção B - Somente exibindo retorno
console.log(notas.filter(nota => nota > 7.0))
