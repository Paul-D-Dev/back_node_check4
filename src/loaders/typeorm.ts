import { Ticket } from './../entity/ticket.entity';
import { Team } from './../entity/team.entity';
import { Event } from './../entity/event.entity';
import { Circus } from './../entity/circus.entity';
import { Address } from './../entity/address.entity';
import { createConnection } from 'typeorm';
import { User } from '../entity/user.entity';

export default async () => {

    // Connexion à MySQL en local
    await createConnection({
        type: 'mysql',
        host: process.env.LOCAL_DB_LOCALHOST,
        username: process.env.LOCAL_DB_USER,
        password: process.env.LOCAL_DB_PASSWORD,
        database: 'checkpoint4',
        entities: [
            // Ecrire tous noms des tables Entities
            User,
            Address,
            Circus,
            Event,
            Team,
            Ticket,

        ],
        synchronize: true,
    });
    };
