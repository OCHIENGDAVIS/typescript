import { Router, Request, Response, NextFunction } from 'express';

interface RequestWithBody extends Request {
  body: { [key: string]: string | undefined };
}

const requireAuth = (req: Request, res: Response, next: NextFunction) => {
  if (req.session?.loggedIn) {
    next();
    return;
  }
  return res.send('forbidden');
};

const router = Router();

router.get('/login', (req: RequestWithBody, res: Response) => {
  res.send(`
    <form method="POST">
        <div>
            <label>Email</label>
            <input name="email" />
        </div>
        <div>
            <label>password</label>
            <input name="password" type="password" />
        </div>
        <button>Submit </button>

    </form>
  
  `);
});

router.post('/login', (req: RequestWithBody, res: Response) => {
  const { email, password } = req.body;
  if (email && password && email === 'p@gmail.com' && password === 'pass') {
    // mark the user as logedin and redrect them to the
    req.session = { loggedIn: true };
    res.redirect('/');
  } else {
    res.send('invalid login');
  }
});

router.get('/', (req: Request, res: Response) => {
  if (req.session?.loggedIn) {
    res.send(`
        <div>
            <div>You are loged in </div>
            <a href="/logout">logout </a>

        </div>
        
        `);
  }
  res.send(
    `
    <div>
            <div>You are not loged in </div>
            <a href="/login">login </a>

        </div>
        
    `
  );
});

router.get('/logout', (req: Request, res: Response) => {
  req.session = undefined;
  res.redirect('/');
});

router.get('/protected', requireAuth, (req: Request, res: Response) => {
  return res.send('welcome to the protected route user');
});

export { router };
