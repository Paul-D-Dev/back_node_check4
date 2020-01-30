import { UserRepository } from './../repository/user.repository';
import { Ticket } from './../entity/ticket.entity';
import { getCustomRepository } from 'typeorm';
import { AbstractService } from '../core/abstract.services';
import { TicketRepository } from '../repository/ticket.repository';
/**
 * Cette classe est un service
 * C'est ici que l'ensemble de la logique consernant les psort doit apparaitre.
 * Attention ! Mettez le moins possible d'element dans le controlleur
 */
export class TicketService extends AbstractService {

  protected repository = getCustomRepository(TicketRepository);
  userRepository = getCustomRepository(UserRepository);

  relations = ['event', 'user'];

  async getAll() {
    return await this.repository.find({relations: this.relations});
  }

  async getOneTicket(id: number) {
    return await this.repository.findOne(id, {relations: this.relations});
  }

  async create(ticket: Ticket) {

      let user = this.userRepository.create(ticket.user);
      user = await this.userRepository.save(user);
      ticket.user = user;
      ticket = this.repository.create(ticket);
      this.repository.save(ticket);
  }

}

