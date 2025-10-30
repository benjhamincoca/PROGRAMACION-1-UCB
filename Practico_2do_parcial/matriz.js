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
        } else {
            return null;
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

    print() {
        console.table(this.data);
    }

    // 1️⃣ Suma total de todos los elementos
    sumaTotal() {
        let suma = 0;
        for (let i = 0; i < this.rows; i++) {
            for (let j = 0; j < this.cols; j++) {
                suma += this.data[i][j];
            }
        }
        return suma;
    }

    // 2️⃣ Promedio de todos los elementos
    promedio() {
        return this.sumaTotal() / (this.rows * this.cols);
    }

    // 3️⃣ Elemento mayor
    elementoMayor() {
        let mayor = this.data[0][0];
        for (let i = 0; i < this.rows; i++) {
            for (let j = 0; j < this.cols; j++) {
                if (this.data[i][j] > mayor) mayor = this.data[i][j];
            }
        }
        return mayor;
    }

    // 4️⃣ Elemento menor
    elementoMenor() {
        let menor = this.data[0][0];
        for (let i = 0; i < this.rows; i++) {
            for (let j = 0; j < this.cols; j++) {
                if (this.data[i][j] < menor) menor = this.data[i][j];
            }
        }
        return menor;
    }

    // 5️⃣ Buscar un número y devolver su posición
    buscarNumero(valor) {
        for (let i = 0; i < this.rows; i++) {
            for (let j = 0; j < this.cols; j++) {
                if (this.data[i][j] === valor) {
                    return { fila: i, columna: j };
                }
            }
        }
        return null;
    }

    // 6️⃣ Contar pares e impares
    contarParesImpares() {
        let pares = 0, impares = 0;
        for (let i = 0; i < this.rows; i++) {
            for (let j = 0; j < this.cols; j++) {
                if (this.data[i][j] % 2 === 0) pares++;
                else impares++;
            }
        }
        return { pares, impares };
    }

    // 7️⃣ Suma de cada fila
    sumaPorFila() {
        const sumas = [];
        for (let i = 0; i < this.rows; i++) {
            let suma = 0;
            for (let j = 0; j < this.cols; j++) {
                suma += this.data[i][j];
            }
            sumas.push(suma);
        }
        return sumas;
    }

    // 8️⃣ Suma de cada columna
    sumaPorColumna() {
        const sumas = new Array(this.cols).fill(0);
        for (let i = 0; i < this.rows; i++) {
            for (let j = 0; j < this.cols; j++) {
                sumas[j] += this.data[i][j];
            }
        }
        return sumas;
    }

    // 9️⃣ Transpuesta
    transpuesta() {
        const nueva = new Matrix(this.cols, this.rows);
        for (let i = 0; i < this.rows; i++) {
            for (let j = 0; j < this.cols; j++) {
                nueva.data[j][i] = this.data[i][j];
            }
        }
        return nueva;
    }

    // 🔟 Diagonal principal
    diagonalPrincipal() {
        const diag = [];
        for (let i = 0; i < Math.min(this.rows, this.cols); i++) {
            diag.push(this.data[i][i]);
        }
        return diag;
    }

    // 11️⃣ Diagonal secundaria
    diagonalSecundaria() {
        const diag = [];
        for (let i = 0; i < Math.min(this.rows, this.cols); i++) {
            diag.push(this.data[i][this.cols - 1 - i]);
        }
        return diag;
    }

    // 12️⃣ Suma de la diagonal principal
    sumaDiagonalPrincipal() {
        return this.diagonalPrincipal().reduce((a, b) => a + b, 0);
    }

    // 13️⃣ Suma de la diagonal secundaria
    sumaDiagonalSecundaria() {
        return this.diagonalSecundaria().reduce((a, b) => a + b, 0);
    }

    // 14️⃣ Matriz simétrica
    esSimetrica() {
        if (this.rows !== this.cols) return false;
        for (let i = 0; i < this.rows; i++) {
            for (let j = 0; j < this.cols; j++) {
                if (this.data[i][j] !== this.data[j][i]) return false;
            }
        }
        return true;
    }

    // 15️⃣ Matriz identidad
    esIdentidad() {
        if (this.rows !== this.cols) return false;
        for (let i = 0; i < this.rows; i++) {
            for (let j = 0; j < this.cols; j++) {
                if (i === j && this.data[i][j] !== 1) return false;
                if (i !== j && this.data[i][j] !== 0) return false;
            }
        }
        return true;
    }

    // 16️⃣ Suma de dos matrices
    sumarOtra(matrixB) {
        if (this.rows !== matrixB.rows || this.cols !== matrixB.cols) return null;
        const nueva = new Matrix(this.rows, this.cols);
        for (let i = 0; i < this.rows; i++) {
            for (let j = 0; j < this.cols; j++) {
                nueva.data[i][j] = this.data[i][j] + matrixB.data[i][j];
            }
        }
        return nueva;
    }

    // 17️⃣ Resta de dos matrices
    restarOtra(matrixB) {
        if (this.rows !== matrixB.rows || this.cols !== matrixB.cols) return null;
        const nueva = new Matrix(this.rows, this.cols);
        for (let i = 0; i < this.rows; i++) {
            for (let j = 0; j < this.cols; j++) {
                nueva.data[i][j] = this.data[i][j] - matrixB.data[i][j];
            }
        }
        return nueva;
    }

    // 18️⃣ Multiplicación de dos matrices
    multiplicarOtra(matrixB) {
        if (this.cols !== matrixB.rows) return null;
        const nueva = new Matrix(this.rows, matrixB.cols);
        for (let i = 0; i < this.rows; i++) {
            for (let j = 0; j < matrixB.cols; j++) {
                let suma = 0;
                for (let k = 0; k < this.cols; k++) {
                    suma += this.data[i][k] * matrixB.data[k][j];
                }
                nueva.data[i][j] = suma;
            }
        }
        return nueva;
    }

    // 19️⃣ Contar ceros
    contarCeros() {
        let cont = 0;
        for (let i = 0; i < this.rows; i++) {
            for (let j = 0; j < this.cols; j++) {
                if (this.data[i][j] === 0) cont++;
            }
        }
        return cont;
    }

    // 20️⃣ Sumar elementos en la parte superior de la diagonal
    sumaSuperiorDiagonal() {
        let suma = 0;
        for (let i = 0; i < this.rows; i++) {
            for (let j = i + 1; j < this.cols; j++) {
                suma += this.data[i][j];
            }
        }
        return suma;
    }

    // 21️⃣ Sumar elementos debajo de la diagonal
    sumaInferiorDiagonal() {
        let suma = 0;
        for (let i = 1; i < this.rows; i++) {
            for (let j = 0; j < i; j++) {
                suma += this.data[i][j];
            }
        }
        return suma;
    }

    // 22️⃣ Ver si es matriz nula
    esNula() {
        for (let i = 0; i < this.rows; i++) {
            for (let j = 0; j < this.cols; j++) {
                if (this.data[i][j] !== 0) return false;
            }
        }
        return true;
    }

    // 23️⃣ Clonar matriz
    clonar() {
        const nueva = new Matrix(this.rows, this.cols);
        for (let i = 0; i < this.rows; i++) {
            for (let j = 0; j < this.cols; j++) {
                nueva.data[i][j] = this.data[i][j];
            }
        }
        return nueva;
    }

    // 24️⃣ Rotar 90° a la derecha
    rotarDerecha() {
        const nueva = new Matrix(this.cols, this.rows);
        for (let i = 0; i < this.rows; i++) {
            for (let j = 0; j < this.cols; j++) {
                nueva.data[j][this.rows - 1 - i] = this.data[i][j];
            }
        }
        return nueva;
    }

    // 25️⃣ Matriz espejo horizontal
    espejoHorizontal() {
        const nueva = this.clonar();
        for (let i = 0; i < this.rows; i++) {
            nueva.data[i].reverse();
        }
        return nueva;
    }
}