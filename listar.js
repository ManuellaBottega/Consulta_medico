function listar(consultas, prompt, menu) {
    consultas.forEach(consulta => {
    console.log(`ID: ${consulta.id}, Data: ${consulta.Data}, ID do medico:
    ${consulta.idMedico}, ID do paciente: ${consulta.idPaciente}, Descrição: ${consulta.descricao}`);
    });

    console.log ('Pressione enter para retornar ao menu. ')
    let voltarMenu = prompt ('')
    if (voltarMenu == '') {
        menu()
    }
}



module.exports = listar