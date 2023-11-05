const assert = require("chai").assert;
const Mtrx = require("mtrx");

describe("Creation", function () {
  it("should create a 1x1 random matrix with no arguments", function () {
    const m = new Mtrx();
    assert.equal(m.rows, 1);
    assert.equal(m.cols, 1);
  });

  it("should create a 2x2 matrix with specific values", function () {
    const m = new Mtrx([
      [1, 2],
      [3, 4],
    ]);
    assert.equal(m.rows, 2);
    assert.equal(m.cols, 2);
    assert.equal(m[0][0], 1);
    assert.equal(m[1][1], 4);
  });

  describe("Operation", function () {
    it("should access elements using array-like notation", function () {
      const m = new Mtrx([
        [1, 2],
        [3, 4],
      ]);
      assert.equal(m[1][1], 4);
    });

    it("should set elements using array-like notation", function () {
      const m = new Mtrx([
        [1, 2],
        [3, 4],
      ]);
      m[0][1] = 5;
      assert.equal(m[0][1], 5);
    });
  });

  describe("Properties", function () {
    it("should correctly report the number of rows and columns", function () {
      const m1 = new Mtrx(2, 3);
      assert.equal(m1.rows, 2);
      assert.equal(m1.cols, 3);

      const m2 = new Mtrx([
        [1, 2, 3],
        [4, 5, 6],
      ]);
      assert.equal(m2.rows, 2);
      assert.equal(m2.cols, 3);
    });

    it("should calculate the determinant for square matrices", function () {
      const m1 = new Mtrx(2, 2, 4);
      assert.equal(m1.det, 16);

      const m2 = new Mtrx([
        [1, 2],
        [3, 4],
      ]);
      assert.equal(m2.det, -2);
    });

    it("should return NaN for the determinant if rows and columns are not equal", function () {
      const m = new Mtrx(2, 3);
      assert.isNaN(m.det);
    });

    it("should calculate the rank of the matrix", function () {
      const m1 = new Mtrx(2, 2, 0);
      assert.equal(m1.rank, 0);

      const m2 = new Mtrx([
        [1, 0],
        [0, 1],
      ]);
      assert.equal(m2.rank, 2);
    });

    it("should update rank when matrix elements are changed", function () {
      const m = new Mtrx(2, 2, 1);
      assert.equal(m.rank, 2);
      m[0][0] = 0;
      assert.equal(m.rank, 1);
    });
  });

  describe("Static Functions", function () {
    it("should create a matrix of zeros with the specified size", function () {
      const m = Mtrx.zeros(3, 4);
      assert.equal(m.rows, 3);
      assert.equal(m.cols, 4);
      assert.equal(m[0][0], 0);
    });

    it("should create a matrix of ones with the specified size", function () {
      const m = Mtrx.ones(2, 3);
      assert.equal(m.rows, 2);
      assert.equal(m.cols, 3);
      assert.equal(m[0][0], 1);
    });

    it("should create an identity matrix of the specified size", function () {
      const m = Mtrx.eye(3);
      assert.equal(m.rows, 3);
      assert.equal(m.cols, 3);
      assert.equal(m[0][0], 1);
    });

    it("should create a diagonal matrix from an array of values", function () {
      const m = Mtrx.diag([2, 4, 6]);
      assert.equal(m.rows, 3);
      assert.equal(m.cols, 3);
      assert.equal(m[0][0], 2);
    });

    it("should check if an object is a Mtrx object", function () {
      const m = new Mtrx([
        [1, 0],
        [0, 1],
      ]);
      const n = [
        [1, 2],
        [3, 4],
      ];
      assert.isTrue(Mtrx.isMtrx(m));
      assert.isFalse(Mtrx.isMtrx(n));
    });
  });
});
