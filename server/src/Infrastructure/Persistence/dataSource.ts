import { DataSource } from "typeorm";

export const RFMDataSource = new DataSource({
    type: "mysql",
    host: process.env.DB_HOST,
    port: 3306,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    entities: [],
    logging: true,
    synchronize: true,
});

const initDB = async () => {
    await RFMDataSource
        .initialize()
        .then(() => {
            console.log(`Connected to DB!`);
            // logs
        })
        .catch(_ => {
            console.error(`Failed to Connect to DB!`);
            // do decent logs here later.
        });
};

export default initDB;
