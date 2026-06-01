const express = require('express');
const { eq } = require('drizzle-orm');

const db = require('../db');
const { products } = require('../db/schema');

const router = express.Router();

router.post('/products', async (request, response) => {
  const body = request.body;

  const product = await db.insert(products).values(body).returning();

  return response.status(201).json(product);
});

router.get('/products', async (request, response) => {
  const allProducts = await db.select().from(products);

  return response.json(allProducts);
});

router.get('/users/:id/products', async (request, response) => {
  const { id } = request.params;

  const userProducts = await db.query.products.findMany({
    where: eq(products.userId, +id),
  });

  return response.json(userProducts);
});

module.exports = router;