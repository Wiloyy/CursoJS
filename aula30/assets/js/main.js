// Função para formatar a data e hora
function criaData(data) {
    const diasDaSemana = ['domingo', 'segunda-feira', 'terça-feira', 'quarta-feira', 'quinta-feira', 'sexta-feira', 'sábado'];
    const diaDaSemana = diasDaSemana[data.getDay()];
    const dia = data.getDate()
    const mes = data.getMonth();
    const ano = data.getFullYear();
    const hora = data.getHours()
    const min = data.getMinutes()
    const sec = data.getSeconds()

    return `${diaDaSemana}, ${dia} de ${mes} de ${ano} ${hora}:${min}:${sec}`;
}
function atualizaDataHora() {
    const data = new Date('2019-11-07T22:52:00');
    const dataHoraFormatada = criaData(data);
    const h1 = document.querySelector('#dataHora');
    h1.textContent = dataHoraFormatada;
}

function setResultado(msg) {
    const resultado = document.querySelector('#resultado');
    resultado.innerHTML = msg;

    const h1 = document.createElement('h1');
    h1.textContent = msg;
    resultado.appendChild(h1);
}

document.addEventListener('DOMContentLoaded', () => {
    atualizaDataHora();
});
