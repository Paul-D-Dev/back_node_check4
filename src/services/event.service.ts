import { TicketRepository } from './../repository/ticket.repository';
import { getCustomRepository } from 'typeorm';
import { AbstractService } from '../core/abstract.services';
import { EventRepository } from '../repository/event.repository';
/**
 * Cette classe est un service
 * C'est ici que l'ensemble de la logique consernant les psort doit apparaitre.
 * Attention ! Mettez le moins possible d'element dans le controlleur
 */
export class EventService extends AbstractService {

  protected repository = getCustomRepository(EventRepository);
  protected ticketRepository = getCustomRepository(TicketRepository);

  relations = ['tickets', 'circus'];

  async getAll() {
    return await this.repository.find({relations: this.relations});
  }

  async getOneEvent(id: number) {
    const event = await this.repository.findOne(id, {relations: this.relations});
    return event ;
  }

}

