import { commonController } from '../core/common_functions.controller';
import { Application, Router, Request, Response } from 'express';
import { UserService } from '../services/user.service';
import { EmployeeService } from '../services/employee.service';

/**
 * Ce controller vous servira de modèle pour construire vos différent controller
 * Le controlle rest la partie de l'application qui est en charge de la reception
 * des requetes http.
 *
 * @param app l'application express
 */
export const EmployeeController = (app: Application) => {
  const service = new EmployeeService();

  let employeeRouter = Router();

  employeeRouter = commonController(service, employeeRouter);

  app.use('/employees', employeeRouter);

};
