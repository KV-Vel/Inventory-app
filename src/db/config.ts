import { ConnectionConfig } from "pg";

const config: ConnectionConfig = {
    connectionString:
        process.env.MODE === "production" ? process.env.PRODUCTION_DB : process.env.LOCAL_DB,
};

export default config;
