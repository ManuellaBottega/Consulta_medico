function adicionarConsultas (consultas, medicos, pacientes, prompt, menu) {
    let Data = prompt('Digite a data da consulta: ')
    if (Data === '') {
        console.log('Data invalida.')
        adicionarConsultas(consultas, medicos, pacientes, prompt, menu)
    }

    let idMedico = parseInt(prompt('Digite o ID do médico: '))
    let medicoValido = medicos.find(medico => medico.id === idMedico)
    if (!medicoValido) {
        console.log('ID do médico inválido.')
        adicionarConsultas(consultas, medicos, pacientes, prompt, menu)
    }

    let idPaciente = parseInt(prompt('Digite o ID do paciente: '))
    let pacienteValido = pacientes.find(paciente => paciente.id === idPaciente)
    if (!pacienteValido) {
        console.log('ID do paciente inválido.')
        adicionarConsultas(consultas, medicos, pacientes, prompt, menu)
    }

    let descricao = prompt('Digite a descrição da consulta: ')
    
    let novaConsulta = {
        id: consultas.length > 0 ? consultas[consultas.length - 1].id + 1 : 1,
        Data: Data,
        idMedico: idMedico,
        idPaciente: idPaciente,
        descricao: descricao
    }

    consultas.push(novaConsulta)
    console.log('Consulta adicionada com sucesso!')

    menu()
}

module.exports = adicionarConsultas
