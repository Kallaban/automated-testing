const { assert } = require("chai");
const Mtrx = require("mtrx");

describe("Creation", function () {
  it("should create a 1x1 random matrix with no arguments", function () {
    const m = new Mtrx();
    expect(m.rows).to.equal(1);
    expect(m.cols).to.equal(1);
  });

  it("should create a 2x2 matrix with specific values", function () {
    const m = new Mtrx([
      [1, 2],
      [3, 4],
    ]);
    expect(m.rows).to.equal(2);
    expect(m.cols).to.equal(2);
    expect(m[0][0]).to.equal(1);
    expect(m[1][1]).to.equal(4);
  });

  describe("Operation", function () {
    it("should access elements using array-like notation", function () {
      const m = new Mtrx([
        [1, 2],
        [3, 4],
      ]);
      expect(m[1][1]).to.equal(4);
    });

    it("should set elements using array-like notation", function () {
      const m = new Mtrx([
        [1, 2],
        [3, 4],
      ]);
      m[0][1] = 5;
      expect(m[0][1]).to.equal(5);
    });
  });

  describe("Properties", function () {
    it("should correctly report the number of rows and columns", function () {
      const m1 = new Mtrx(2, 3);
      expect(m1.rows).to.equal(2);
      expect(m1.cols).to.equal(3);

      const m2 = new Mtrx([
        [1, 2, 3],
        [4, 5, 6],
      ]);
      expect(m2.rows).to.equal(2);
      expect(m2.cols).to.equal(3);
    });

    it("should calculate the determinant for square matrices", function () {
      const m1 = new Mtrx(2, 2, 4);
      expect(m1.det).to.equal(16);

      const m2 = new Mtrx([
        [1, 2],
        [3, 4],
      ]);
      expect(m2.det).to.equal(-2);
    });

    it("should return NaN for the determinant if rows and columns are not equal", function () {
      const m = new Mtrx(2, 3);
      expect(isNaN(m.det)).to.be.true;
    });

    it("should calculate the rank of the matrix", function () {
      const m1 = new Mtrx(2, 2, 0);
      expect(m1.rank).to.equal(0);

      const m2 = new Mtrx([
        [1, 0],
        [0, 1],
      ]);
      expect(m2.rank).to.equal(2);
    });

    it("should update rank when matrix elements are changed", function () {
      const m = new Mtrx(2, 2, 1);
      expect(m.rank).to.equal(2);
      m[0][0] = 0;
      expect(m.rank).to.equal(1);
    });
  });

  describe("Static Functions", function () {
    it("should create a matrix of zeros with the specified size", function () {
      const m = Mtrx.zeros(3, 4);
      expect(m.rows).to.equal(3);
      expect(m.cols).to.equal(4);
      expect(m[0][0]).to.equal(0);
    });

    it("should create a matrix of ones with the specified size", function () {
      const m = Mtrx.ones(2, 3);
      expect(m.rows).to.equal(2);
      expect(m.cols).to.equal(3);
      expect(m[0][0]).to.equal(1);
    });

    it("should create an identity matrix of the specified size", function () {
      const m = Mtrx.eye(3);
      expect(m.rows).to.equal(3);
      expect(m.cols).to.equal(3);
      expect(m[0][0]).to.equal(1);
    });

    it("should create a diagonal matrix from an array of values", function () {
      const m = Mtrx.diag([2, 4, 6]);
      expect(m.rows).to.equal(3);
      expect(m.cols).to.equal(3);
      expect(m[0][0]).to.equal(2);
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
      expect(Mtrx.isMtrx(m)).to.be.true;
      expect(Mtrx.isMtrx(n)).to.be.false;
    });
  });
});
