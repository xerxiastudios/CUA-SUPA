import {
  drizzle as drizzleDb,
  PostgresJsDatabase,
} from "drizzle-orm/postgres-js";
import { migrate } from "drizzle-orm/postgres-js/migrator";
import postgres from "postgres";

const migrationConnection = postgres(
  process.env.DATABASE_URL || "postgres://localhost:5432/drizzle",
  { max: 1 }
);
const queryConnection = postgres(
  process.env.DATABASE_URL || "postgres://localhost:5432/drizzle"
);

type DrizzleClient = PostgresJsDatabase<Record<string, never>>;

declare global {
  var drizzle: DrizzleClient;
}

export const drizzle: DrizzleClient =
  global.drizzle || drizzleDb(queryConnection);

if (process.env.NODE_ENV !== "production") {
  global.drizzle = drizzle;
}

const main = async () => {
  await migrate(drizzleDb(migrationConnection), {
    migrationsFolder: "drizzle",
  });
  await migrationConnection.end();
  console.log("migration done");
  process.exit(0);
};

main();
