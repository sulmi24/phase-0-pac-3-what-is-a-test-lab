const name = "Susan";
const height = 39;
describe("Height", () => {
  it("is less than 40", () => {
    expect(height).toBeLessThan(40);
  });
});
const message = `${name} is ${height} inches tall`;

module.exports = { name, height, message };
