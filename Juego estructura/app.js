const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

canvas.width = 1000;
canvas.height = 1000;

const rows = 10;
const cols = 10;
const cellSize = canvas.width / cols;

// Crear instancia de Matrix y cargar el mapa
const mapMatrix = new Matrix(rows, cols);
mapMatrix.fillFromArray(MAP_DATA);

const images = {};
let loadedCount = 0;
const totalImages = 12;

// Cargar imágenes
for (let i = 0; i < totalImages; i++) {
  const img = new Image();
  img.src = `assets/${i}.png`;
  img.onload = () => {
    loadedCount++;
    if (loadedCount === totalImages) {
      // Crear el juego cuando todas las imágenes carguen
      const game = new Game("gameCanvas", mapMatrix, images);
      game.draw();
    }
  };
  images[i] = img;
}
