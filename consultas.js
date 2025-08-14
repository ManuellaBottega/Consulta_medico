function adicionarConsultas (consultas, prompt, menu) {
    let Data = prompt('Digite a data da consulta: ')
    if (Data === '') {
        console.log('Data invalida.')
        adicionarConsultas(consultas, prompt, menu)
    }
    let
}

module.exports = adicionarConsultas