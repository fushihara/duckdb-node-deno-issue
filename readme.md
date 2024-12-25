When the duckdb library is run with deno, an unnecessary wal file is created.
If the same code is executed in node, it is not created.

The wal file is necessary for duckdb, but should be deleted when the sql execution is complete and the DB is closed.
