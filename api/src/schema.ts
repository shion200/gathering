/*
  DO NOT RENAME THIS FILE FOR DRIZZLE-ORM TO WORK
*/
import { sqliteTable, text, integer } from 'drizzle-orm/sqlite-core';

export const users = sqliteTable('users', {
  id: integer('id').primaryKey({autoIncrement : true}).notNull(),
  name: text('name').notNull(),
  url : text('url').notNull(),
  date: integer('date',{mode : "timestamp"}).notNull()
});