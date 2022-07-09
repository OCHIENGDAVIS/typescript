import express, { Request, Response } from 'express';
import { router } from './routes/login';
import cookieSession from 'cookie-session';

const app = express();
app.use(
  cookieSession({
    keys: ['wewererertrt'],
  })
);
app.use(express.urlencoded({ extended: true }));
app.use(router);

app.get('/dashboard', (req: Request, res: Response) => {
  res.send(`
    <div>
        <h1>Hello there </h1>
    </div>
    `);
});

app.listen(3000, () => {
  console.log('listening on port 3000');
});
