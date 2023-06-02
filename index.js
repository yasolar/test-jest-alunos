const express = require('express')
const {turmaA, turmaB} = require('./turmas')
const app = express()
const port = 3000

app.get('/', (req,res) => {
    res.send({
        'TURMA A': turmaA().alunos,
        'TURMA B': turmaB().alunos
    })
})

app.listen(port, () => {
    console.log(`Aplicação em http://localhost:${port}`)
})