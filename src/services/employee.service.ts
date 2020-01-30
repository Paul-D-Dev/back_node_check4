import { getCustomRepository } from 'typeorm';
import { AbstractService } from '../core/abstract.services';
import { EmployeeRepository } from '../repository/employee.repository';
/**
 * Cette classe est un service
 * C'est ici que l'ensemble de la logique consernant les psort doit apparaitre.
 * Attention ! Mettez le moins possible d'element dans le controlleur
 */
export class EmployeeService extends AbstractService {

  protected repository = getCustomRepository(EmployeeRepository);

  relations = ['circus'];

  async getAll() {
    return await this.repository.find({relations: this.relations});
  }

  async getOneEmployee(id: number) {
    return await this.repository.findOne(id, {relations: this.relations});
  }

}

