const { pgTable, serial, varchar, timestamp } = require("drizzle-orm/pg-core");

const users = pgTable("users", {
  id: serial("id").primaryKey(),
  name: varchar("name", { length: 256 }).notNull(),
  email: varchar("email", { length: 256 }).notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

const products = pgTable("products", {
  id: serial("id").primaryKey(),
  name: varchar("name", { length: 256 }).notNull(),
  brand: varchar("brand", { length: 256 }).notNull(),
  used: varchar("used", { length: 256 }).notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

module.exports = {
  users,
  products,
};