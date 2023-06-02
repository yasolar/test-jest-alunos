function mediaNota (aluno, turma) {
    const notasSomadas = Object.values(aluno.materias).reduce((acc, valor) => acc + valor, 0);
    const quantidade = Object.keys(aluno.materias).length
    const calcMedia = notasSomadas / quantidade
    const media = Math.round(calcMedia)
    console.log(`Média do aluno ${aluno.nome} da turma ${turma} é ${media}`)
    return media
}

module.exports = mediaNota
