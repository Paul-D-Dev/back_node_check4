import { Application, Router } from 'express';
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

  eventRouter = commonController(service, eventRouter);

  app.use('/events', eventRouter);

};
