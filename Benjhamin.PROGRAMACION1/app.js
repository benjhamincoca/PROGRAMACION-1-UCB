//elementos del DOM
const canvas = document.getElementById("matrixCanvas");
const fillButton = document.getElementById("fillBtn");
const ClearButton = document.getElementById("clearBtn");
const incrementButton = document.getElementById("incrementBtn");

//contexto de dibujo
const context = canvas.getContext("2d");

// instancia de la matriz
const matrix = new Matrix(5, 5, 0);

// inicializa el canvas y dibuja la matriz

function initializeCanvas(){
    drawMatrix();
    window.addEventListener("resize", drawMatrix);
    fillButton.addEventListener("click", fillMatrix);
    incrementButton.addEventListener("click", fillIncrementRows);
    ClearButton.addEventListener("click", clearCanvas);
}

//Dibuja la matriz en el canvas
function drawMatrix(){
    const width = canvas.width = canvas.clientWidth;
    const heught = canvas.height = canvas.clientHeight;
    const cellWidth = width / matrix.cols;
    const cellHeight = heught / matrix.rows;
    context.clearRect(0, 0, width, heught);
    context.font = `${Math.min(cellWidth, cellHeight) / 2}px Arial`;
    context.textAlign = "center";
    context.textBaseline = "middle";

    for(let row = 0; row < matrix.rows; row++){
        for(let col = 0; col < matrix.cols; col++){
            const x = col * cellWidth;
            const y = row * cellHeight;
            const value = matrix.getValue(row, col);

            context.strokeRect(x, y, cellWidth, cellHeight);
            context.fillText(value, x + cellWidth / 2, y + cellHeight / 2);
        }
    }
}

//Llena la matriz con valores aleatorios y redibuja
function fillMatrix(){
    matrix.fillRandom(0, 9);
    drawMatrix();
}

function fillIncrementRows(){
    matrix.fillIncrementRows();
    drawMatrix();
}
// Limpia el canvas y la matriz
function clearCanvas(){
    context.clearRect(0, 0, canvas.width, canvas.height);
}

// Ejecuta la inicialización al cargar la ventana
initializeCanvas();