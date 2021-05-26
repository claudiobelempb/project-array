import { Specification } from "../models/Specification";
import { SpecificationsRepository } from "../repositories/SpecificationsRepository";

interface ICreateSpecificationDTO {
  name: string;
  description: string;
}

class CreateSpecificationService {
  constructor(private repository: SpecificationsRepository) {}

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
