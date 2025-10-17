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
      for (let fil = 0; fil < this.rows;fil++){
        for (let col = 0; col < this.cols; col++){
            this.data[fil][col] = 0; // Limpia la matriz
        }
      }  
      const centroFila = this.rows / 2;
      const centroCol = this.cols / 2;
      const maxRadio = Math.floor(this.rows / 2);

      for (let fil = 0; fil < this.rows; fil++){
        for (let col = 0; col < this.cols; col++){
            const distVertical = Math.abs(fil - centroFila);
            const distHorizontal = Math.abs(col - centroCol);
             
            if (distVertical + distHorizontal < maxRadio) {
                this.data[fil][col] = 1;
            }

        }
      }

    }

    crucesconcentricas(){
        for (let fil = 0; fil < this.rows; fil++) {
            for (let col = 0; col < this.cols; col++) {
                this.data[fil][col] = 0; // Inicializa a 0
            }
        }

        const R_MAX = this.rows - 1;
        const C_MAX = this.cols - 1;
    
        for (let fil = 0; fil < this.rows; fil++) {
            for (let col = 0; col < this.cols; col++) {
                const esBorde = fil === 0 || fil === R_MAX || col === 0 || col === C_MAX;
                const esLineaInterna = fil === 2 || fil === 7 || col === 2 || col === 7;
                const esLineaCentralH = fil === 4 || fil === 5;
                const esLineaCentralV = col === 4 || col === 5;

                if (esBorde || esLineaInterna || esLineaCentralH || esLineaCentralV) {
                    this.data[fil][col] = 1;
                }
            }
        }
    }

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
    }

    // Dentro de la class Matrix {...}

    cuadradoDentroDeCuadrado() {
        for (let fil = 0; fil < this.rows; fil++) {
            for (let col = 0; col < this.cols; col++) {
                
                // Define el índice máximo (borde)
                const R_MAX = this.rows - 1;
                const C_MAX = this.cols - 1;
                
                // Condición para el Borde Exterior (valor 1)
                const esBordeExterior = fil === 0 || fil === R_MAX || col === 0 || col === C_MAX;

                // Condición para el Borde Interior (valor 2)
                // Está a 2 celdas del borde (filas 2, N-3 y columnas 2, N-3)
                const esBordeInterior = (fil === 2 || fil === R_MAX - 2 || col === 2 || col === C_MAX - 2);
                
                // Condición para el Espacio Interior (valor 0)
                // Esto se define por las celdas internas que no están en el Borde Interior
                const esInterior = fil > 2 && fil < R_MAX - 2 && col > 2 && col < C_MAX - 2;
                
                // Lógica de Pintado: Las condiciones deben ser mutuamente excluyentes
                if (esBordeExterior) {
                    this.data[fil][col] = 1; // Primer cuadrado (borde)
                } else if (esBordeInterior) {
                    // Solo pintamos con '2' si no estamos en el borde exterior
                    this.data[fil][col] = 0; // Segundo cuadrado (borde interior)
                } else if (esInterior) {
                    this.data[fil][col] = 2; // Interior (vacío)
                } else {
                    // Todo lo demás (como la capa entre el cuadrado 1 y 2) es 0
                    this.data[fil][col] = 0;
                }
            }
        }
    }

    bordes_centros() {
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

    // Dentro de la class Matrix {...}

    lineasParalelas() {
        // Define el índice máximo para la columna (borde derecho)
        const C_MAX = this.cols - 1; 

        for (let fil = 0; fil < this.rows; fil++) {
            // 1. Alternancia Horizontal: Chequea si la fila es PAR o IMPAR
            // (Asumiendo que 0 es PAR)
            const esFilaPar = (fil % 2 === 0);

            for (let col = 0; col < this.cols; col++) {
                
                // 2. Condición del Borde Vertical
                const esBordeVertical = (col === 0 || col === C_MAX);
                
                // LÓGICA DE PINTADO:
                
                if (esFilaPar) {
                    // Fila PAR (0, 2, 4...): Toda la fila se pinta con 1.
                    this.data[fil][col] = 1;
                    
                } else {
                    // Fila IMPAR (1, 3, 5...): Solo se pinta 1 en los bordes.
                    if (esBordeVertical) {
                        this.data[fil][col] = 1;
                    } else {
                        this.data[fil][col] = 0; // El resto de la fila impar es 0.
                    }
                }
            }
        }
    }


    marcasDeCruz() {
        for (let fil = 0; fil < this.rows; fil++) {
            for (let col = 0; col < this.cols; col++) {
                
                // 1. Condición para la diagonal Principal repetida
                // La celda es parte de la diagonal si (fila % 4) == (columna % 4)
                // Esto genera las diagonales: (0,0), (1,1), (2,2), (3,3), (4,0), (5,1), ...
                const esDiagonalPrincipal = (fil % 4) === (col % 4);

                // 2. Condición para la diagonal Secundaria repetida
                // La celda es parte de la anti-diagonal si (fila + columna) % 4 es igual a 0 ó 3.
                // Para un patrón de 4x4, la suma debe ser (4 - 1 = 3) o (3 + 4 = 7)
                // Es más fácil verificar si la suma de (fil % 4) + (col % 4) es 3 (o 7, 11, etc.).
                const sumaModulo = (fil % 4) + (col % 4);
                const esDiagonalSecundaria = (sumaModulo === 3 || sumaModulo === 7); 
                // Para el patrón que muestras, solo necesitas que la suma módulo 4 sea una constante:
                // Observando tu patrón, la suma módulo 4 es siempre 3 para la anti-diagonal.
                // (0, 3) -> 3; (1, 2) -> 3; (2, 1) -> 3; (3, 0) -> 3.
                const esAntiDiagonal = ((fil % 4) + (col % 4)) === 3;


                // 3. Lógica de Pintado: Es una marca de cruz si cumple cualquiera de las diagonales.
                if (esDiagonalPrincipal || esAntiDiagonal) {
                    this.data[fil][col] = 1;
                } else {
                    this.data[fil][col] = 0;
                }
            }
        }
    }

    romboDeEsquinas() {
        // 1. Define el punto central de la matriz para dividirla en cuadrantes
        const centroFila = Math.floor(this.rows / 2);
        const centroCol = Math.floor(this.cols / 2);

        // 2. Define el "radio" máximo de los rombos
        // El rombo debe caber en el cuadrante, por lo que el radio es el tamaño del cuadrante.
        const radio = centroFila; 
        
        for (let fil = 0; fil < this.rows; fil++) {
            for (let col = 0; col < this.cols; col++) {
                
                // Inicializamos a 0
                this.data[fil][col] = 0;

                let dist1, dist2;
                
                // 3. IDENTIFICAR EL CUADRANTE Y CALCULAR LAS DISTANCIAS
                
                if (fil < centroFila && col < centroCol) {
                    // CUADRANTE SUPERIOR IZQUIERDO: Rombo de (0, 0)
                    dist1 = fil; // Distancia al borde superior
                    dist2 = col; // Distancia al borde izquierdo
                    
                } else if (fil < centroFila && col >= centroCol) {
                    // CUADRANTE SUPERIOR DERECHO: Rombo de (0, C_MAX)
                    dist1 = fil;                   // Distancia al borde superior
                    dist2 = this.cols - 1 - col;   // Distancia al borde derecho

                } else if (fil >= centroFila && col < centroCol) {
                    // CUADRANTE INFERIOR IZQUIERDO: Rombo de (R_MAX, 0)
                    dist1 = this.rows - 1 - fil;   // Distancia al borde inferior
                    dist2 = col;                   // Distancia al borde izquierdo

                } else { // fil >= centroFila && col >= centroCol
                    // CUADRANTE INFERIOR DERECHO: Rombo de (R_MAX, C_MAX)
                    dist1 = this.rows - 1 - fil;   // Distancia al borde inferior
                    dist2 = this.cols - 1 - col;   // Distancia al borde derecho
                }

                // 4. APLICAR LA CONDICIÓN DEL ROMBO (Distancia de Manhattan)
                // La celda es 1 si la suma de sus distancias a los dos bordes adyacentes 
                // de la esquina es menor que el radio máximo.
                if (dist1 + dist2 < radio) {
                    this.data[fil][col] = 1;
                }
            }
        }
    }

    toString() {
        return this.data.map(row => row.join('\t')).join('\n');
    }
}