const express = require("express");
const { Client } = require("pg");
const { drizzle } = require("drizzle-orm/node-postgres");

const app = express();
const port = 3000;

const client = new Client({
  host: "127.0.0.1",
  port: 5432,
  user: "nodejs_course_admin",
  password: "my_password",
  database: "nodejs_course_database",
});

async function main() {
  await client.connect();
  const db = drizzle(client);

  app.get("/", (req, res) => {
    res.send("Server is running");
  });

  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
}

main().catch((error) => {
  console.error(error);
});