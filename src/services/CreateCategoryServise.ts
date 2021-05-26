import { Category } from "../models/Category";
import { CategoriesRepository } from "../repositories/CategoriesRepository";

interface ICreateCategoryDTO {
  name: string;
  description: string;
}

class CreateCategoryServise {

  constructor(
    private repository: CategoriesRepository
  ){}

  execute({ name, description }: ICreateCategoryDTO): Category {

    const categoryNameExists = this.repository.findByName(name);

    if (categoryNameExists) {
      throw new Error("Category name already exists");
    }

    const category = this.repository.create({
      name,
      description,
    });

    return category;
  }
}

export { CreateCategoryServise };
