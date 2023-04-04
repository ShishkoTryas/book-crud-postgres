import config from "dotenv"

config.config()

export const DB_URL = process.env.DATABASE_URL;