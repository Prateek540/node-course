const request = require("supertest");
const app = require("../src/app");
const User = require("../src/models/user");

beforeEach(async () => {
  console.log("Before test cases");
  await User.deleteMany();
});

test("Should signup a new user", async () => {
  await request(app)
    .post("/users")
    .send({
      name: "Prateek Pathak",
      email: "prateekpathak97@gmail.com",
      password: "Prateek97",
    })
    .expect(201);
});
