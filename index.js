const express = require('express')
const alunosAprovados = require('./alunosAprovados')
const app = express()
const port = 3000

app.get('/', (req,res) => {
    const aAprov = alunosAprovados()
    const alunos = aAprov.alunos
    res.send(alunos)
    for (let a = 0; a < alunos.length; a++) {
        console.log('nota mat fisica: ', alunos[a].materias.fisica)
    }
})

app.listen(port, () => {
    console.log(`Aplicação em http://localhost:${port}`)
})