import { Specification } from "../../../entities/Specification";
import { ISpecificationsRepository } from "../../../repositories/ISpecificationsRepository";

class SpecificationIndexUseCase {
  constructor(private specificationRepository: ISpecificationsRepository) {}
  execute(): Specification[] {
    const specifications = this.specificationRepository.index();
    return specifications;
  }
}

export { SpecificationIndexUseCase };
