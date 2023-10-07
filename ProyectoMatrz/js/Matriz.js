const matriz = [];
const filas = 10;
const columnas = 5;
let clicsRestantes = 5;


const tabla = document.getElementById("matriz");
for (let i = 0; i < filas; i++) {
    const fila = [];
    const row = tabla.insertRow();
    for (let j = 0; j < columnas; j++) {
        const cell = row.insertCell();
        cell.textContent = (i * columnas) + j + 1;
        fila.push(cell);
        cell.addEventListener("click", function() {
            if (clicsRestantes > 0 && !cell.classList.contains("desactivado")) {
                deshabilitarFilaColumna(i, j);
                clicsRestantes--;
            }
        });
    }
    matriz.push(fila);
}

function deshabilitarFilaColumna(fila, columna) {

    for (let i = 0; i < columnas; i++) {
        matriz[fila][i].classList.add("desactivado");
    }


    for (let i = 0; i < filas; i++) {
        matriz[i][columna].classList.add("desactivado");
    }


    matriz[fila][columna].style.backgroundColor = getRandomColor();
}


function getRandomColor() {
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);


    const color = `#${red.toString(16).padStart(2, '0')}${green.toString(16).padStart(2, '0')}${blue.toString(16).padStart(2, '0')}`;
    return color;
}


function reiniciar() {
    location.reload();
}