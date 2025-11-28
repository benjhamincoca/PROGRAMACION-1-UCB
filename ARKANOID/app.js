// app.js contiene la lógica principal del juego, el bucle y la inicialización.

class Game {
    constructor(canvasId, mapMatrixData, images) {
        this.canvas = document.getElementById(canvasId);
        this.ctx = this.canvas.getContext('2d');
        this.images = images;

        // Dimensiones
        this.cols = 20;
        this.rows = 30;
        this.cellSize = 30; 
        
        // CORRECCIÓN: Inicializa el mapa usando la CLASE MapMatrix y pasándole los datos.
        this.mapMatrix = new MapMatrix(mapMatrixData);

        // Inicializar Jugador (Paleta, ID 2)
        this.player = new Player(this.canvas.width, this.canvas.height);

        // Inicializar Pelota (ID 0)
        this.ball = new Ball(this.player.x, this.player.y, 5);
        this.isPaused = true; 

        this.initControls(); 
        this.gameLoop(); 
    }

    initControls() {
        document.addEventListener("keydown", (e) => {
            switch (e.key) {
                case "ArrowLeft":
                    this.player.move(-1, this.canvas.width);
                    break;
                case "ArrowRight":
                    this.player.move(1, this.canvas.width);
                    break;
                case " ": 
                    if (this.isPaused) {
                        this.isPaused = false; 
                    }
                    break;
            }
        });
    }
    
    // Bucle principal del juego
    gameLoop = () => {
        if (!this.isPaused) {
            this.ball.update(); 
            this.checkCollisions(); 
        } else {
            // Pelota sigue a la paleta si está en pausa
            this.ball.x = this.player.x;
        }

        this.draw(); 
        
        requestAnimationFrame(this.gameLoop); 
    }

    // Verifica colisiones con muros y ladrillos
    checkCollisions() {
        const canvasWidth = this.canvas.width;
        const canvasHeight = this.canvas.height;
        const r = this.ball.radius;
        const cellSize = this.mapMatrix.cellSize; 
        
        // 1. Colisión con Muros Laterales
        if (this.ball.x - r < cellSize || this.ball.x + r > canvasWidth - cellSize) {
            this.ball.vx *= -1; 
        }
        
        // 2. Colisión con Muro Superior
        if (this.ball.y - r < cellSize) {
            this.ball.vy *= -1; 
        }

        // 3. Colisión con Muro Inferior (Game Over)
        if (this.ball.y + r > canvasHeight - cellSize) {
            console.log("¡PELOTA PERDIDA!");
            this.ball = new Ball(this.player.x, this.player.y, 5);
            this.isPaused = true;
        }

        // --- Lógica de Colisión con Ladrillos ---
        
        const col = Math.floor(this.ball.x / cellSize);
        const row = Math.floor(this.ball.y / cellSize);
        
        const value = this.mapMatrix.getValue(row, col);

        // Si el valor es un ladrillo destructible (3, 4, 5, 6)
        if (value >= 3 && value <= 6) {
            // Destruir el ladrillo (cambiar a espacio vacío ID 1)
            this.mapMatrix.setValue(row, col, 1);
            
            // Invertir la dirección Y (rebote)
            this.ball.vy *= -1;
        }
    }


    draw() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        // 1. Dibujar el MAPA (Muros y Ladrillos)
        const cellSize = this.mapMatrix.cellSize;
        for (let r = 0; r < this.rows; r++) {
            for (let c = 0; c < this.cols; c++) {
                const value = this.mapMatrix.getValue(r, c);
                const img = this.images[value];
                
                // Dibuja la imagen si existe
                if (img) {
                    this.ctx.drawImage(
                        img, 
                        c * cellSize, 
                        r * cellSize, 
                        cellSize, 
                        cellSize
                    );
                }
            }
        }
        
        // 2. Dibujar la Paleta
        const playerImg = this.images[this.player.value];
        if (playerImg) {
            this.ctx.drawImage(
                playerImg,
                this.player.x - this.player.width / 2, // Centrar X
                this.player.y - this.player.height / 2, // Centrar Y
                this.player.width,
                this.player.height
            );
        }

        // 3. Dibujar la Pelota
        this.ball.draw(this.ctx, this.images); 
    }
}

// --- LÓGICA DE INICIALIZACIÓN (Resuelve la carga de imágenes) ---

const images = {};
let loadedCount = 0;
const totalImages = 13; // Del 0.png al 12.png

window.onload = function () {
    const canvas = document.getElementById("gameCanvas");

    // Configuración de las dimensiones del Canvas
    canvas.width = 600;  // 20 columnas * 30px
    canvas.height = 900; // 30 filas * 30px
    
    // Función para iniciar el juego después de la carga
    const startGame = () => {
        // Usa MAP_DATA que se carga desde main.js
        const game = new Game("gameCanvas", MAP_DATA, images);
        console.log("Juego Arkanoid Iniciado y Mapa Dibujado.");
    };

    // Bucle de carga de imágenes
    for (let i = 0; i < totalImages; i++) {
        const img = new Image();
        
        img.onload = () => {
            loadedCount++;
            if (loadedCount === totalImages) {
                startGame();
            }
        };
        img.onerror = () => {
            console.error(`Error al cargar assets/${i}.png. Asegúrate de que las 13 imágenes existan.`);
            loadedCount++;
            if (loadedCount === totalImages) {
                startGame();
            }
        };
        
        img.src = `assets/${i}.png`;
        images[i] = img;
    }
};