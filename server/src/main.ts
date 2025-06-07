import "reflect-metadata";
import express from 'express';
import InitializeDB, {RFMDataSource} from './Infrastructure/Persistence/dataSource.js';
import { config } from "./config.js";

const app = express()
const port: number = config.PORT; 

console.log(config);

app.use('/', (_, res: express.Response) => {
    res.status(200).send("Full HP");
});

app.listen(port, () => {
    console.log(`Server is ON and running on PORT: ${port}`);
    InitializeDB();
});
