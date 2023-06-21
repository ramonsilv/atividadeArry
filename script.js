alunos = ['joão', 'Maria', 'Woshinton', 'Pepe', 'Lucas', 'Raquel', 'antonio', 'cleitin', 'onorio', 'tainara', 'Ana', 'Madalena', 'Helena', 'Juliana', 'Sandra']

alunos.push('samuel', 'david', 'andré') //(EXERCIO 1)

// console.log(alunos) //(EXERCICIO 2)

alunos.splice(1, 0, 'david')
alunos.splice(5, 0, 'samuel')
alunos.splice(6, 0, 'andré')

// console.log(alunos) //(EXERCIO 3)

alunos.sort().reverse()

// console.log(alunos) //(EXERCIO 4)

alunos.shift()//05
alunos.pop() //06

// console.log(alunos) //(EXERCICIO 5 E 6)

index = alunos.indexOf(5,1)//07
alunos.splice(index, 1)//07

alunos.sort()//8

// console.log(alunos) //(EXERCICIO 8)

numero = 0

for (let numero of alunos) {
    // console.log(numero++ + " - " + nome); //(EXERCICO 9)
}

nota = [];

// console.log(nota) //(EXERCICIO 10)

for (i = 0; i < alunos.length; i++) {
    let notaalunos = Math.random()*10    //SOFT CODE //(EXERCICIO 11)
    nota.push(notaalunos.toFixed(1))

    //HARD CODE
    // nota.push((Math.random()*10).toFixed(1)) //(EXERCICIO 11)
}
// console.log(nota) //(EXERCICIO 11)

nota = nota.map(notas => notas +1) // (EXERCICO 12)
// console.log(nota)                  // (EXERCICO 12) 

maiorQSete = nota
maiorQSete = maiorQSete.filter(variavel => variavel > 7) // (EXERCICO 13) 

boletim = alunos.map((aluno, index) => `${aluno} - Nota ${nota[index]}`)

boletimOrganizado = boletim.join('\n')
// console.log(boletim) //RESULTADO 10-13
// console.log(boletimOrganizado) //RESULTADO 10-13

for(i = 0; i < alunos.length; i++) {
    let nome = alunos [i]
    let notas = nota [i]

    // console.log('Aluno: '+ nome + " - Nota: " + notas )//(EXERCICIO 14)
}

nota.forEach(notinha => {
    if(notinha >= 7.0) {
        // console.log("aprovado")
    }
    else {
        // console.log("Reprovado") //(15)
    }
});

// console.log(alunos.indexOf('LUCAS'));//(EXERCICIO 16)

let nerd = nota.findIndex(notas => notas > 9)
// console.log(nerd) //(EXERCICO 17)

// console.log(alunos.includes("LUCAS"))//(18)

let soma = nota.reduce((acumulador, item) => acumulador += item)//(EXEXRCICIO 19)
let media = soma / nota.length
// console.log(media)   //(EXERCICIO 19)

// console.log(nota.every(nota => nota >= media)) //(EXERCICIO 20)
// console.log(nota.some(nota => nota > media)) //(EXERCICIO 21)