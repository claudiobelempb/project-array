import { ISpecificationsRepository } from "./ISpecificationsRepository";
import { Specification } from "../entities/Specification";

interface ICreateSpecificationDTO {
  name: string;
  description: string;
}

class SpecificationsRepository implements ISpecificationsRepository {
  private specifications: Specification[];

  constructor() {
    this.specifications = [];
  }

  index(): Specification[] {
    return this.specifications;
  }

  show(id: string): Specification[] | undefined {
    const specification = this.specifications.filter(
      category => category.id === id,
    );
    return specification;
  }

  create({ name, description }: ICreateSpecificationDTO): Specification {
    const specification = new Specification();

    Object.assign(specification, {
      name,
      description,
      created_at: new Date(),
      updated_at: new Date(),
    });

    this.specifications.push(specification);

    return specification;
  }

  findByName(name: string): Specification {
    const specification = this.specifications.find(
      specification => specification.name === name,
    );
    return specification;
  }

  findById(id: string): Specification {
    const specification = this.specifications.find(
      specification => specification.id === id,
    );
    return specification;
  }
}

export { SpecificationsRepository };
