import { Category } from "../../../entities/Category";
import { ICategoriesRepository } from "../../../repositories/ICategoriesRepository";
import { ICreateCategoryDTO } from "../../../dtos/ICreateCategoryDTO";

class CategoryCreateUseCase {

  constructor(
    private categoriesRepository: ICategoriesRepository
  ){}

  execute({ name, description }: ICreateCategoryDTO): Category {

    const categoryNameExists = this.categoriesRepository.findByName(name);

    if (categoryNameExists) {
      throw new Error("Category name already exists");
    }

    const category = this.categoriesRepository.create({
      name,
      description,
    });

    return category;
  }
}

export { CategoryCreateUseCase };
