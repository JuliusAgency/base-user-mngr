import { Request, Response, Router } from 'express';
import { setupAuthController } from './controller';
import { AuthMngrOPtions } from './types';

export const setupAuthRouter = (options: AuthMngrOPtions) => {
  const cnt = setupAuthController(options);
  const router = Router();

  router.get('/', (_req: Request, res: Response) => {
    res.send('hello world');
  });

  router.post('/login', cnt.login);
  router.get('/logout', cnt.logout);
  router.post('/register', cnt.register);
  router.post('/change-password', cnt.changePassword);
  
  router.post("/reset-password-request", cnt.resetPasswordRequest);
  router.post("/reset-password", cnt.resetPassword);  

  return router;
};
