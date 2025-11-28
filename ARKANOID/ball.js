// ball.js - CLASE PELOTA PARA ARKANOLD

class Ball {
    value = 0; // ID del sprite de la pelota de tenis
    radius = 15; // Radio de la pelota en píxeles (la mitad de cellSize 30)

    constructor(playerX, playerY, initialSpeed = 5) {
        // La pelota inicia justo encima de la paleta
        this.x = playerX; 
        this.y = playerY - this.radius; 
        
        // El ángulo inicial está entre 135 grados y 45 grados (para que vaya hacia ARRIBA)
        // Math.PI * 3/4 = 135 grados, Math.PI / 4 = 45 grados
        const angle = (Math.PI / 4) + (Math.random() * Math.PI / 2); 
        
        // Componentes de velocidad (vx y vy)
        this.vx = initialSpeed * Math.cos(angle);
        this.vy = initialSpeed * Math.sin(angle) * -1; // Multiplicar por -1 para que vaya hacia ARRIBA
    }

    // Actualiza la posición en cada frame
    update() {
        this.x += this.vx;
        this.y += this.vy;
    }

    // Dibuja la pelota usando el ID 0
    draw(ctx, images) {
        const img = images[this.value]; 
        
        if (img) {
            ctx.drawImage(
                img,
                this.x - this.radius, // Posición x de inicio (izquierda)
                this.y - this.radius, // Posición y de inicio (arriba)
                this.radius * 2, 
                this.radius * 2  
            );
        }
    }
}