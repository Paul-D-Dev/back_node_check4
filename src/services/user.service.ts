import { getCustomRepository } from 'typeorm';
import { UserRepository } from '../repository/user.repository';
import { AbstractService } from '../core/abstract.services';
/**
 * Cette classe est un service
 * C'est ici que l'ensemble de la logique consernant les psort doit apparaitre.
 * Attention ! Mettez le moins possible d'element dans le controlleur
 */
export class UserService extends AbstractService {

  protected repository = getCustomRepository(UserRepository);

  relations = ['tickets'];

  async getAll() {
    return await this.repository.find({relations: this.relations});
  }

  async getOneUser(id: number) {
    return await this.repository.findOne(id, {relations: this.relations});
  }

}

