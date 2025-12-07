class Game {
  startCellCleared = false;

  constructor(canvasId, mapMatrix, images) {
    this.canvas = document.getElementById(canvasId);
    this.ctx = this.canvas.getContext("2d");

    this.rows = mapMatrix.rows || 10;
    this.cols = mapMatrix.cols || 10;
    this.cellSize = this.canvas.width / this.cols;

    this.mapMatrix = mapMatrix;
    this.images = images;

    this.player = this.initPlayer();
    this.initControls();
  }

  initPlayer() {
    for (let r = 0; r < this.rows; r++) {
      for (let c = 0; c < this.cols; c++) {
        if (this.mapMatrix.getValue(r, c) === 1) {
          return new Player(r, c, 1);
        }
      }
    }
    // Si no hay jugador en la matriz, colocarlo en 10,10
    return new Player(9, 4, 1);
  }

initControls() {
  document.addEventListener("keydown", (e) => {
    switch (e.key) {
    
      case "ArrowLeft":
        this.handleMove(0, -1);
        new Audio("assets/sounds/mov.mp3").play();
        break;
      case "ArrowRight":
        this.handleMove(0, 1);
        new Audio("assets/sounds/mov.mp3").play();
        break;
      case " ":
        new Audio("assets/sounds/space.mp3").play();
        break;
    }
  });
}

  handleMove(dr, dc) {
    // Posición antes del intento de movimiento
    const beforeRow = this.player.row;
    const beforeCol = this.player.col;

    // Intentar mover
    this.player.move(dr, dc, this.rows, this.cols);

    // Verificar si el jugador se movió
    const moved =
      this.player.row !== beforeRow || this.player.col !== beforeCol;

    // Solo la primera vez que se mueve, limpiar la celda inicial con fondo (1)
    if (moved && !this.startCellCleared) {
      this.mapMatrix.setValue(beforeRow, beforeCol, 10);
      this.startCellCleared = true;
    }

    // Redibujar
    this.draw();
  }

  draw() {
    this.ctx.clearRect(9, 4, this.canvas.width, this.canvas.height);

    for (let r = 0; r < this.rows; r++) {
      for (let c = 0; c < this.cols; c++) {
        const value = this.mapMatrix.getValue(r, c);
        const img = this.images[value];

        if (img) {
          this.ctx.drawImage(
            img,
            c * this.cellSize,
            r * this.cellSize,
            this.cellSize,
            this.cellSize
          );
        }

        // Dibujar jugador encima
        if (r === this.player.row && c === this.player.col) {
          const playerImg = this.images[this.player.value];
          if (playerImg) {
            this.ctx.drawImage(
              playerImg,
              c * this.cellSize,
              r * this.cellSize,
              this.cellSize,
              this.cellSize
            );
          }
        }
      }
    }
  }
}
