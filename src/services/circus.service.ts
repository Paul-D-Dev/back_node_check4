import { getCustomRepository } from 'typeorm';
import { AbstractService } from '../core/abstract.services';
import { CircusRepository } from '../repository/circus.repository';
/**
 * Cette classe est un service
 * C'est ici que l'ensemble de la logique consernant les psort doit apparaitre.
 * Attention ! Mettez le moins possible d'element dans le controlleur
 */
export class CircusService extends AbstractService {

  protected repository = getCustomRepository(CircusRepository);

}

