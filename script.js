let votosSi = 0;
let votosNo = 0;
let votosAbstenerse = 0;

const botonSi = document.getElementById('si');
const botonNo = document.getElementById('no');
const botonAbstenerse = document.getElementById('abstenerse');
const resultado = document.getElementById('resultado');

function actualizarResultado() {
  resultado.innerHTML = `Resultados:<br>Sí: ${votosSi}<br>No: ${votosNo}<br>Abstenerse: ${votosAbstenerse}`;
}

botonSi.addEventListener('click', () => {
  votosSi++;
  actualizarResultado();
});
botonNo.addEventListener('click', () => {
  votosNo++;
  actualizarResultado();
});
botonAbstenerse.addEventListener('click', () => {
  votosAbstenerse++;
  actualizarResultado();
});
