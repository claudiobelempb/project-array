import { Specification } from '../../../entities/Specification';
import { ISpecificationsRepository } from '../../../repositories/ISpecificationsRepository';
import { ICreateSpecificationDTO } from '../../../dtos/ICreateSpecificationDTO';

class SpecificationCreateUseCase {

  constructor(private: specificationsRepository: ISpecificationsRepository){}

  execute({name, description}: ICreateSpecificationDTO): Specification{
    const specificationNameExists = this.specificationsRepository.findByName(name);
    if(specificationNameExists){
      throw new Error('Specification name already exists');
    }
    const specification = this.specificationsRepository.create({
      name,
      description,
    });

    return specification;
  }

}

export { SpecificationCreateUseCase };