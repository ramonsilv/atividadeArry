// 1) Crie um array que armazene os nomes de 15 alunos.

let alunos = ["John Lennon", "Mary Jane", "James Bond", "Sarah Marshall", "Michael Jackson", "Emily Blunt", "Daniel Radcliffe", "Olivia Palito", "David Guetta", "Emma Watson", "Matthew Cuthbert", "Sophia Turner", "Joseph Joestar", "Ava Max", "Christopher Robbin"]

// 2) Adicione 3 alunos ao final do array.

alunos.push("Axl Rose", "Bruno Mars", "Zara Larson")

// 3) Adicione 1 aluno na posição de índice 2, 1 aluno na posição de índice 6 e 1 aluno na posição de índice 7.

alunos.splice(2, 0, "Tim Maia")
alunos.splice(6, 0, "Luan Santana")
alunos.splice(7, 0, "Péricles")

// 4) Ordene o array de modo decrescente.

alunos.sort().reverse()

// 5) Remova o último aluno.

alunos.pop()

// 6) Remova o primeiro aluno.

alunos.shift()

// 7) Remova o aluno da posição de index 5.

alunos.splice(5, 1)

// 8) Ordene o array em modo crescente.
alunos.sort()

// 9) Utilize o loop FOR..OF para percorrer o array e exibir os nomes e a posição dos alunos.

for (let [index, aluno] of alunos.entries()) {
    console.log(index + ' - ' + aluno)
}