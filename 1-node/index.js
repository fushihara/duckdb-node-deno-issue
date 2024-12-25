import { rm } from "fs/promises"
import duckdb from "duckdb";
const dbFile = "duckdb-direct.duckdb";
try {
  await rm(dbFile);
} catch (error) { }
const db = new duckdb.Database(dbFile);
const con = db.connect();
con.run(`CREATE TABLE IF NOT EXISTS test_table(
  id                     INTEGER NOT NULL PRIMARY KEY
) `);
con.close();
db.close();
