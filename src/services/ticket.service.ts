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

}

