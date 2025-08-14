const prompt = require ('prompt-sync')() 

const listar = require ('./listar')
const adicionarConsultas = require ('./consultas')

let medicos = [
    {id: 1, nome: 'Grey', Especialidade: 'Diagnostico'},
    {id: 2, nome: 'House', Especialidade: 'Cirurgia'}
    ]
    
let pacientes = [
    {id: 1, nome: 'Ana', DataDeNascimento: '10/02/1978'},
    {id: 2, nome: 'Joao', DataDeNascimento: '12/07/1989'}
]
    
let consultas = [
    {id: 1, Data: '10/02/1978', idMedico: 1, idPaciente: 2, descricao: 'Consulta inicial'},
    {id: 2, Data: '12/07/1989', idMedico: 2, idPaciente: 2, descricao: 'Seguimento' }
]

function menu() {
    console.log ('\n----- SISTEMA DE GERENCIAMENTO DE CONTATOS -----')
    console.log ('\n1. Adicionar consulta')
    console.log ('2. Listar consultas')
    console.log ('3. Sair\n')

    let opcao = prompt ('Digite a opção que deseja executar: ')
    switch (opcao) {
        case '1':
            adicionarConsultas(consultas, prompt, menu)
            break
        case '2':
            listar(consultas, prompt, menu)
            break
        case '3':
            console.log('Obrigado por usar nosso sistema de consultas. Até mais!')
            break
        default:
            console.log('Esta opção é inválida, tente novamente!\n')
            menu()
    }
}

menu()

module.exports = {consultas, menu}
    
