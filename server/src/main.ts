import express from 'express';

const app = express()
const port: number = 2077;

app.use('/', (_, res: express.Response) => {
    res.status(200).send("Full HP");
});

app.listen(port, () => {
  console.log(`Hello express app listening on port ${port}`)
});
