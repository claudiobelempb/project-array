import { Specification } from "../models/Specification";

interface ICreateSpecificationDTO {
  name: string;
  description: string;
}

class SpecificationsRepository {
  private specifications: Specification[];

  constructor() {
    this.specifications = [];
  }

  index(): Specification[] {
    return this.specifications;
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

}

export { SpecificationsRepository };