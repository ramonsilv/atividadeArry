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

console.log(alunos) //(EXERCICIO 8)


