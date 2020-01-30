import { Application, Router, Request, Response } from 'express';
import { commonController } from '../core/common_functions.controller';
import { EventService } from '../services/event.service';

/**
 * Ce controller vous servira de modèle pour construire vos différent controller
 * Le controlle rest la partie de l'application qui est en charge de la reception
 * des requetes http.
 *
 * @param app l'application express
 */
export const EventController = (app: Application) => {
  const service = new EventService();

  let eventRouter = Router();

  eventRouter.get('/:id', async (req: Request, res: Response) => {
    return res.send(await service.getOneEvent(parseInt(req.params.id, 10)));
  });

  eventRouter = commonController(service, eventRouter);

  app.use('/events', eventRouter);

};
