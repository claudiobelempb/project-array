import { ICategoriesRepository } from "../../../repositories/ICategoriesRepository";

import { Category } from "../../../entities/Category";

class CategoryIndexUseCase {
  constructor(private categoriesRepository: ICategoriesRepository) {}

  execute(): Category[] {
    const categories = this.categoriesRepository.index();
    return categories;
  }
}

export { CategoryIndexUseCase };
