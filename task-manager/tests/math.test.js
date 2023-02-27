const { calculateTip } = require("../src/math");

test("Should calculate total with tip!!!", () => {
  const total = calculateTip(10, 0.3);
  expect(total).toBe(13);
});

test("Asynchronous code", () => {
  expect(1).toBe(1);
});
