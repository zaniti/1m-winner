const app = require("../server");
const supertest = require("supertest");
const request = supertest(app);
const mongoose = require("mongoose");

beforeAll(async () => {
  const url = process.env.DATABASE_URL;
  await mongoose.connect(url, { useNewUrlParser: true });
});

it("Add new participant to db", async (done) => {
  const res = await request.post("/register").send({
    full_name: "anass gouriani",
    age: 23,
    phone:"+212342343",
    email: "emailss@gmail.com",
    password: "12345",
  });
  expect(res.status).toBe(200);
  done();
});

it("Create new groupe", async (done) => {
  const res = await request.post("/newgroupe").send({
    id_participant: "60362cabb6b07d6e6c0bdfb4",
    questions : "testo"
  });
  expect(res.status).toBe(201);
  done();
});

it("Join a groupe", async (done) => {
  const res = await request.post("/joingroup").send({
    id_participant: "6036233326f1cb44c0532a3b",
    code: 8340,
  });
  expect(res.status).toBe(200);
  done();
});

it("Add new question", async (done) => {
  const res = await request.post("/addQuestion").send({
    quest : "how are you ?",
    answer : "yes",
    false_choise : ["no","nn"],
    points : 6
});
  expect(res.status).toBe(200);
  done();
});

