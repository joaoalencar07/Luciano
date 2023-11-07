function atividadeDoDia(diaSemana) {
    switch (diaSemana) {
        case "SEGUNDA":
            return "REUNIÃO";
        case "TERÇA":
            return "PALESTRA";
        case "QUARTA":
            return "WORKSHOP";
        case "QUINTA":
            return "TRABALHO REMOTO";
        case "SEXTA":
            return "AGENDAMENTO SEMANAL";
        case "SÁBADO":
            return "SHOPPING";
        case "DOMINGO":
            return "PRAIA";
        default:
            return "Dia da semana inválido";
    }
}

const diaHoje = "SEGUNDA"; // Substitua "SEGUNDA" pelo dia da semana desejado
const atividade = atividadeDoDia(diaHoje);

console.log(`Para o dia de ${diaHoje}, a atividade é: ${atividade}`);
