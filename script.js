alunos = ['joão', 'maria', 'woshinton', 'pepe', 'lucas', 'raquel', 'antonio', 'cleitin', 'onorio', 'tainara', 'Ana', 'Madalena', 'Helena', 'Juliana', 'Sandra']

alunos.push('samuel', 'david', 'andré') //(EXERCIO 1)

// console.log(alunos) //(EXERCICIO 2)

alunos.splice(1, 0, 'david')
alunos.splice(5, 0, 'samuel')
alunos.splice(6, 0, 'andré')

// console.log(alunos) //(EXERCIO 3)

alunos.sort().reverse()

// console.log(alunos) //(EXERCIO 4)

alunos.shift()
alunos.pop()

// console.log(alunos) //(EXERCICIO 5 E 6)

index = alunos.indexOf(5)//07
alunos.splice(index, 1)//07

alunos.sort()//8

// console.log(alunos) //(EXERCICIO 8)

numero = 0

for (const nome of alunos) {
    // console.log(numero++ + " - " + nome); //(EXERCICO 9)
}

nota = [];

// console.log(nota) //(EXERCICIO 10)

for (i = 0; i < 15; i++) {
    notaalunos = 9              //(EXERCICO 11)
    nota.push(notaalunos)
}

nota = nota.map(notas => notas +1) // (EXERCICO 12)

maiorQSete = nota
maiorQSete = maiorQSete.filter(variavel => variavel > 7) // (EXERCICO 13) 

boletim = alunos.map((aluno, index) => `${aluno} - Nota ${nota[index]}`)

boletimOrganizado = boletim.join('/n')
// console.log(boletim) //RESULTADO 10-13
// console.log(boletimOrganizado) //RESULTADO 10-13

const alunos = [
    {nome:'João', nota:8}
    {nome:'Maria', nota:5}
    {nome:'Pedro', nota:7.5}
    {nome:'Ana', nota:6}
    {nome:'Carlos', nota:9}
]