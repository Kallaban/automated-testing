const { expect } = require('chai');
const Matrix = require('../matrix');

describe('Matrix Library', () => {
  it('should add two matrices correctly', () => {
    const matrix1 = [[1, 2], [3, 4]];
    const matrix2 = [[5, 6], [7, 8]];
    const result = Matrix.add(matrix1, matrix2); // Використовуйте Matrix.add замість add
    expect(result).to.deep.equal([[6, 8], [10, 12]]);
  });

  it('should subtract two matrices correctly', () => {
    const matrix1 = [[1, 2], [3, 4]];
    const matrix2 = [[5, 6], [7, 8]];
    const result = Matrix.subtract(matrix1, matrix2); // Використовуйте Matrix.subtract замість subtract
    expect(result).to.deep.equal([[-4, -4], [-4, -4]]);
  });
});