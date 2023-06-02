const {turmaA, turmaB} = require('./turmas')
const alunosA = turmaA().alunos
const alunosB = turmaB().alunos
const media = require('./mediaNota')

test('verificando aprovação de alunos da turma A', () => {
    for (let a = 0; a < alunosA.length; a++) {
        expect(media(alunosA[a], 'A')).toBeGreaterThanOrEqual(7)
    }
})

test('verificando aprovação de alunos da turma B', () => {
    for (let b = 0; b < alunosB.length; b++) {
        expect(media(alunosB[b], 'B')).toBeGreaterThanOrEqual(7)
    }
})


