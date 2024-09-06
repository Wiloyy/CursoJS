const numero = Number(prompt('Digite um numero'))
const tituloNumero = document.getElementById('numero-titulo')
const titulo = document.getElementById('texto')

tituloNumero.innerHTML = numero

texto.innerHTML += `<p> Seu numero + 2 é ${numero + 2} </p:`
texto.innerHTML += `<p> Sua raiz quadradada é ${numero ** 0.5} </p:`
texto.innerHTML += `<p>É NaN: ${Number.isNaN(numero)}.</p>`;
texto.innerHTML += `<p> ${numero} é inteiro${Number.isInteger(numero)} </p:`
texto.innerHTML += `<p> Arredonde para cima: ${Math.ceil(numero)}.</p>`;
texto.innerHTML += `<p> Arredonde para baixo: ${Math.floor(numero)}.</p>`;
texto.innerHTML += `<p> Com duas casas decimais: ${numero.toFixed(2)} `;





