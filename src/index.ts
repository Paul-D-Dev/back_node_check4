import express from 'express';
import 'reflect-metadata';
import { UserController } from './controller/user.controller';
import loaders from './loaders';
import { AddressController } from './controller/address.controller';
import { CircusController } from './controller/circus.controller';
import { EmployeeController } from './controller/employee.controller';
import { EventController } from './controller/event.controller';
import { TicketController } from './controller/ticket.controller';

async function startServer() {
    // Récupération de l'application initiale
    const app = express();

    // Chargement des différent loader
    await loaders(app);

    // Ajout des différentes route de votre application
    UserController(app);
    AddressController(app);
    CircusController(app);
    EmployeeController(app);
    EventController(app);
    TicketController(app);

    // Démarrage du serveur une fois que tout est correctement init
    app.listen(3000, () => console.log('Express server  is running 3000'));
  }

startServer();
