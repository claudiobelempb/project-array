import { ICreateSpecificationDTO } from "../dtos/ICreateSpecificationDTO";
import { Specification } from "../entities/Specification";

interface ISpecificationsRepository {
  index(): Specification[];
  show(id: string): Specification[] | undefined;
  create({ name, description }: ICreateSpecificationDTO): Specification;
  findByName(name: string): Specification;
  findById(id: string): Specification;
}

export { ISpecificationsRepository };
