import duckdb from "duckdb";
const dbFileName = "duckdb-direct.duckdb";
try {
  await Deno.remove(dbFileName)
} catch (error) { }
try {
  await Deno.remove(dbFileName+".wal");
} catch (error) { }
const db = new duckdb.Database(dbFileName);
const con = db.connect();
con.run(`CREATE TABLE IF NOT EXISTS test_table(
  id                     INTEGER NOT NULL PRIMARY KEY
) `);
await new Promise((resolve, reject) => {
  con.close(error => {
    if (error) {
      reject(error);
    } else {
      resolve(null);
    }
  });
})
await new Promise((resolve, reject) => {
  db.close(error => {
    if (error) {
      reject(error);
    } else {
      resolve(null);
    }
  });
})
