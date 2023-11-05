class Matrix {
    static add(matrix1, matrix2) {
      if (!Matrix.isValidMatrix(matrix1) || !Matrix.isValidMatrix(matrix2)) {
        throw new Error('Invalid matrices');
      }
  
      if (matrix1.length !== matrix2.length || matrix1[0].length !== matrix2[0].length) {
        throw new Error('Matrices must have the same dimensions for addition');
      }
  
      const result = [];
      for (let i = 0; i < matrix1.length; i++) {
        const row = [];
        for (let j = 0; j < matrix1[0].length; j++) {
          row.push(matrix1[i][j] + matrix2[i][j]);
        }
        result.push(row);
      }
  
      return result;
    }
  
    static isValidMatrix(matrix) {
      if (!Array.isArray(matrix) || matrix.length === 0) {
        return false;
      }
  
      const numRows = matrix.length;
      const numCols = matrix[0].length;
  
      for (let i = 0; i < numRows; i++) {
        if (!Array.isArray(matrix[i]) || matrix[i].length !== numCols) {
          return false;
        }
      }
  
      return true;
    }
    static subtract(matrix1, matrix2) {
      if (!Matrix.isValidMatrix(matrix1) || !Matrix.isValidMatrix(matrix2)) {
        throw new Error('Invalid matrices');
      }
  
      if (matrix1.length !== matrix2.length || matrix1[0].length !== matrix2[0].length) {
        throw new Error('Matrices must have the same dimensions for subtraction');
      }
  
      const result = [];
      for (let i = 0; i < matrix1.length; i++) {
        const row = [];
        for (let j = 0; j < matrix1[0].length; j++) {
          row.push(matrix1[i][j] - matrix2[i][j]);
        }
        result.push(row);
      }
  
      return result;
    }
  }
  
  module.exports = Matrix;