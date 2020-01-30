import { commonController } from './../core/common_functions.controller';
import { Application, Router, Request, Response } from 'express';
import { UserService } from '../services/user.service';

/**
 * Ce controller vous servira de modèle pour construire vos différent controller
 * Le controlle rest la partie de l'application qui est en charge de la reception
 * des requetes http.
 *
 * @param app l'application express
 */
export const UserController = (app: Application) => {
  const service = new UserService();

  let userRouter = Router();

  userRouter.get('/:id', async (req: Request, res: Response) => {
    return res.send(await service.getOneUser(parseInt(req.params.id, 10)));
  });

  userRouter = commonController(service, userRouter);

  app.use('/users', userRouter);

};
