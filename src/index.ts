import express, {Application, Request, Response} from "express";

const app: Application = express();
const port: Number = 4000;

app.get('/', (req: Request, res: Response) => {
    res.status(200).send('halo dunia');
});

app.listen(port, () => console.log(`app listening at port ${port}`));