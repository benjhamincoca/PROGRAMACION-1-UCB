class Matrix {
    rows;
    cols;
    data;

    /**
     * Creates a new Matrix instance.
     * @param {number} rowsParam - The number of rows.
     * @param {number} colsParam - The number of columns.
     * @param {*} defaultValue - The initial value for all elements.
     */
    constructor(rowsParam, colsParam, defaultValue) {
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

    /**
     * Checks if a given row and column position is within the matrix bounds.
     * @param {number} row - The row index.
     * @param {number} col - The column index.
     * @returns {boolean} - True if the position is valid, false otherwise.
     */
    isValidPosition(row, col) {
        return row >= 0 && row < this.rows && col >= 0 && col < this.cols;
    }

    /**
     * Sets the value of an element at a specific position.
     * @param {number} row - The row index.
     * @param {number} col - The column index.
     * @param {*} value - The value to set.
     */
    setValue(row, col, value) {
        if (this.isValidPosition(row, col)) {
            this.data[row][col] = value;
        }
    }

    /**
     * Gets the value of an element at a specific position.
     * @param {number} row - The row index.
     * @param {number} col - The column index.
     * @returns {*} - The element value, or null if the position is invalid.
     */
    getValue(row, col) {
        if (this.isValidPosition(row, col)) {
            return this.data[row][col];
        } else {
            return null;
        }
    }

    /**
     * Fills the matrix with random integers between min (inclusive) and max (inclusive).
     * @param {number} min - The minimum value (inclusive).
     * @param {number} max - The maximum value (inclusive).
     */
    fillRandom(min, max) {
        for (let i = 0; i < this.rows; i++) {
            for (let j = 0; j < this.cols; j++) {
                // Generates a random integer: Math.floor(Math.random() * (max - min + 1)) + min
                const random = Math.floor(Math.random() * (max - min + 1)) + min;
                this.data[i][j] = random;
            }
        }
    }

    /**
     * Returns a string representation of the matrix, with elements separated by tabs and rows by newlines.
     * @returns {string} - The string representation of the matrix.
     */
    toString() {
        return this.data.map(row => row.join('\t')).join('\n');
    }
}