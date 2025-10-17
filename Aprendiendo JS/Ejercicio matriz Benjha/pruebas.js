class Matrix {
    rows;
    cols;
    data;

    constructor(rowsParam, colsParam, defaultValue = 0) {
        this.rows = rowsParam;
        this.cols = colsParam;
        this.data = [];

        for (let i = 0; i < rowsParam; i++) {
            const rowTemp = [];
            for (let j = 0; j < colsParam; j++) {
                rowTemp.push(defaultValue);
            }
            this.data.push(rowTemp);
        }
    }

    isValidPosition(row, col) {
        return row >= 0 && row < this.rows && col >= 0 && col < this.cols;
    }

    setValue(row, col, value) {
        if (this.isValidPosition(row, col)) {
            this.data[row][col] = value;
        }
    }

    getValue(row, col) {
        if (this.isValidPosition(row, col)) {
            return this.data[row][col];
        }
    }

    fillRandom(min, max) {
        for (let i = 0; i < this.rows; i++) {
            for (let j = 0; j < this.cols; j++) {
                const random = Math.floor(Math.random() * (max - min + 1)) + min;
                this.data[i][j] = random;
            }
        }
    }

    fillIncrementRows(){
        var initialValue = 1;
        for (let i = 0; i < this.rows; i++) {
            for(let j = 0; j < this.cols; j++) {
                this.data[i][j] = initialValue;
            }
            initialValue = initialValue + 2;
        }
    }

    todo1() {
        for (let fil = 0; fil < 10; fil++) {
            for (let col = 0; col < 10; col++) {
            this.data[fil][col] = 1;
            }
        }

    }

    borde0(){
        for (let fil = 1; fil < 9; fil++) {
            for (let col = 1; col < 9; col++) {
            this.data[fil][col] = 1;
            }
        }
    }

    cruz1(){
        const centroFila = Math.floor(this.rows / 2);
        const centroCol = Math.floor(this.cols / 2);

        for (let fil = 0; fil < this.rows; fil++) {
            for (let col = 0; col < this.cols; col++) {
                if (fil === centroFila || col === centroCol) {
                    this.data[fil][col] = 1;
                } else {
                    this.data[fil][col] = 0;
                }
            }
    
        }
    }

    bordeconcruz(){
        for (let fil = 0; fil < this.rows; fil++) {
            for (let col = 0; col < this.cols; col++) {
                const esBorde = fil === 0 || fil === this.rows - 1 || col === 0 || col === this.cols - 1;
                const esDiagonalPrincipal = fil === col;
                const esDiagonalSecundaria = fil + col === this.cols - 1;

                if (esBorde) {
                this.data[fil][col] = 1;
                    } else if (esDiagonalPrincipal || esDiagonalSecundaria) {
                this.data[fil][col] = 2;
                    } else {
                this.data[fil][col] = 0;
                    }
            }
        }
    }

    banderanum(){
        const tercio = Math.floor(this.rows / 3);

        for (let fil = 0; fil < this.rows; fil++) {
            for (let col = 0; col < this.cols; col++) {
                if (fil < tercio) {
                    this.data[fil][col] = 1; // Primera franja
                        } else if (fil < 2 * tercio) {
                    this.data[fil][col] = 2; // Segunda franja
                        } else {
                    this.data[fil][col] = 0; // Tercera franja
                        }
            }
        }
    }

    rellenoalt(){   
        for (let fil = 0; fil < this.rows; fil++) {
            const valor = fil % 2; 
            for (let col = 0; col < this.cols; col++) {
                this.data[fil][col] = valor;
            }
        }
    }

    espiralde1(){

    }

    esquinade1(){
        for (let fil = 0; fil < this.rows; fil++) {
            for (let col = 0; col < this.cols; col++) {
                if (col > fil) break;
                    this.data[fil][col] = 1;
            }
        }
    }

    esquinaderecha(){  
        for (let fil = 0; fil < this.rows; fil++) {
            for (let col = this.cols - 1; col >= 0; col--) {
                if (col < this.cols - fil - 1) break;
                    this.data[fil][col] = 1;
            }
        }
    }

    cuadriculade1(){
        for (let fil = 0; fil < this.rows; fil++) {
            for (let col = 0; col < this.cols; col++) {
                if (fil % 2 === 0 || col === 0 || col === this.cols - 1) {
                    this.data[fil][col] = 1;
                } else {
                    this.data[fil][col] = 0;
                }
            }
        }
    }

    triangulocentral(){
    for (let fil = 0; fil < this.rows; fil++){
        for (let col = 0; col < this.cols; col++){
            this.data[fil][col] = 0; // Limpia la matriz

            const centroFila = Math.floor(this.rows / 2);
            const centroCol = Math.floor(this.cols / 2);
            const distanciaVertical = fil - centroFila;
            
            if (fil >= centroFila) {
                const ancho = distanciaVertical; 
                if (col >= centroCol - ancho && col <= centroCol + ancho - 1) {
                     this.data[fil][col] = 1;
                    }
                }
            }
        }
    }   

    rombosconcentricos(){
        // 1. Limpia la matriz (inicializa a 0)
    for (let fil = 0; fil < this.rows; fil++) {
        for (let col = 0; col < this.cols; col++) {
            this.data[fil][col] = 0;
        }
    }

    // 2. Define el centro de la matriz
    // Para 10x10: centroFila = 5, centroCol = 5
    const centroFila = this.rows / 2;
    const centroCol = this.cols / 2;

    // 3. Define el tamaño máximo del rombo (radio). Para 10x10, el radio es 5.
    // Usamos el Math.floor por si la matriz es impar.
    const maxRadio = Math.floor(this.rows / 2); 

    // 4. Aplica la lógica del rombo
    for (let fil = 0; fil < this.rows; fil++) {
        for (let col = 0; col < this.cols; col++) {
            
            // a. Calcula la distancia vertical y horizontal desde el centro.
            // Para el rombo, usamos la distancia de Manhattan (suma de valores absolutos).
            const distVertical = Math.abs(fil - centroFila);
            const distHorizontal = Math.abs(col - centroCol);

            // b. La condición del rombo: La suma de las distancias debe ser menor que el radio máximo.
            // Si la suma de las distancias es menor que 5 (maxRadio), está dentro del rombo.
            if (distVertical + distHorizontal < maxRadio) {
                this.data[fil][col] = 1;
            }
        }
    }
}

    // Dentro de la class Matrix {...}

// Dentro de la class Matrix {...}

crucesconcentricas() {
    for (let fil = 0; fil < this.rows; fil++) {
        for (let col = 0; col < this.cols; col++) {
            this.data[fil][col] = 0; // Limpia la matriz
        }
    }
    
    // Para una matriz 10x10, las filas/columnas son de 0 a 9.
    // El centro "percibido" para una cruz son las filas/columnas 4 y 5.
    
    // Las líneas de tu patrón parecen estar en:
    // Fila 0, 1, 8, 9 (Bordes)
    // Fila 4, 5 (Centro)
    
    for (let fil = 0; fil < this.rows; fil++) {
        for (let col = 0; col < this.cols; col++) {
            
            // Fila o Columna en los BORDES EXTERIORES (0, 1, 8, 9)
            const esBordeVertical = (fil <= 1 || fil >= this.rows - 2);
            const esBordeHorizontal = (col <= 1 || col >= this.cols - 2);

            // Fila o Columna en las CRUCES INTERNAS
            // Tu patrón parece tener líneas en 2, 3, 6, 7 (que es la mitad de 10)
            const esLineaCentral = (fil === 4 || fil === 5) || (col === 4 || col === 5);
            
            // La condición para pintar un '1' es que la celda esté en una línea H o V de la cruz.
            if (esBordeVertical || esBordeHorizontal || esLineaCentral) {
                 this.data[fil][col] = 1;
            }
        }
    }
}

// Dentro de la class Matrix {...}

banderaDiagonal() {
    for (let fil = 0; fil < this.rows; fil++) {
        for (let col = 0; col < this.cols; col++) {
            
            // Condición: La columna debe ser menor o igual a la fila (col <= fil)
            if (col <= fil) {
                this.data[fil][col] = 1;
            } else {
                this.data[fil][col] = 0;
            }
        }
    }
    // ¡Aquí NO va drawMatrix!
}


Bordes_Centros() {
        for (let fil = 0; fil < this.rows; fil++) {
            for (let col = 0; col < this.cols; col++) {
                
                // Define el índice máximo (borde)
                const R_MAX = this.rows - 1;
                const C_MAX = this.cols - 1;
                
                // --- CAPAS DEFINIDAS POR DISTANCIA AL BORDE ---
                
                // CAPA 1: Distancia 0 al borde (filas/cols 0 y N-1)
                const esBordeExterior = fil === 0 || fil === R_MAX || col === 0 || col === C_MAX;

                // CAPA 2: Distancia 1 al borde (filas/cols 1 y N-2) -> Marco de 0
                const esMarcoCero = fil === 1 || fil === R_MAX - 1 || col === 1 || col === C_MAX - 1;

                // CAPA 3: Distancia 2 al borde (filas/cols 2 y N-3) -> Inicio del área de 2
                
                if (esBordeExterior) {
                    // CAPA 1: Borde más externo
                    this.data[fil][col] = 1; 
                
                } else if (esMarcoCero) {
                    // CAPA 2: Marco de separación de un solo grosor
                    this.data[fil][col] = 0; 
                
                } else {
                    // CAPA 3: Todo lo que queda DENTRO de los marcos 1 y 0
                    // Esta es el área central, que debe ir llena de 2
                    this.data[fil][col] = 2; 
                }
            }
        }
    }
    
    toString() {
        return this.data.map(row => row.join('\t')).join('\n');
    }
}