import { Specification } from "../entities/Specification";
import { ISpecificationsRepository } from "../repositories/ISpecificationsRepository";

interface ICreateSpecificationDTO {
  name: string;
  description: string;
}

class CreateSpecificationService {
  constructor(private repository: ISpecificationsRepository) {}

  execute({ name, description }: ICreateSpecificationDTO): Specification {
    const specificationNameExists = this.repository.findByName(name);
    if (specificationNameExists) {
      throw new Error("Specification name already exists");
    }
    const specification = this.repository.create({ name, description });
    return specification;
  }
}

export { CreateSpecificationService };
