import { Pool } from "pg";
import config from "./config.ts";

const pool = new Pool(config);

export default pool;
