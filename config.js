//process.env will read the credentials in .env for us automatically
//install dotenv so this module loads environment variables from a .env file into process.env
export const db = {
    database_uri: process.env.DATABASE_URI
}