import { Category } from "../models/Category";

interface ICreateCategoryDTO {
  name: string;
  description: string;
}

class CategoriesRepository {
  private categories: Category[];

  constructor(){
    this.categories = [];
  }

  index(): Category[] {
    return this.categories;
  }

  create({ name, description }: ICreateCategoryDTO): Category{
    const category = new Category();

    Object.assign(category, {
      name,
      description,
      created_at: new Date(),
      updated_at: new Date(),
    });

    this.categories.push(category);

    return category;
  }
}

export { CategoriesRepository };