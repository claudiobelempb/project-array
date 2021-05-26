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

  show(id: string): Category[] | undefined {
    const category = this.categories.filter(category => category.id === id);
    return category;
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

  findByName(name: string){
    const category = this.categories.find(category => category.name === name);
    return category;
  }

  findById(id: string){
    const category = this.categories.find(category => category.id === id);
    return category;
  }

}

export { CategoriesRepository };