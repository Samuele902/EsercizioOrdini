import createConnectionPool, { sql } from "@databases/mysql";
import * as dotenv from "dotenv";
dotenv.config();

async function run() {
  
  const db = createConnectionPool(`mysql://${process.env.USERDB}:${process.env.PASSDB}@${process.env.HOSTDB}:3306/${process.env.DB}`);

  const results = await db.query(sql`
    SELECT * FROM ordini;
  `);

//  console.log(results);

  results.map((dati) => {
    console.log (`Il numero del prodotto  ${dati.idordini} vale: ${dati.importo} euro`);
  });
  const Ordine= results.reduce((Totale, ValoreAttuale) => Totale+ parseFloat(ValoreAttuale.importo), 0)
  console.log(`Il valore totale è: ${ordine}`);

  await db.dispose();
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});