const express = require('express');
const db = require('../db');
const { users } = require('../db/schema');

const router = express.Router();

router.post('/users', async (request, response) => {
  const body = request.body;

  await db.insert(users).values(body);

  return response.sendStatus(201);
});

router.get('/users', async (request, response) => {
  const result = await db.query.users.findMany();

  return response.json(result);
});

module.exports = router;