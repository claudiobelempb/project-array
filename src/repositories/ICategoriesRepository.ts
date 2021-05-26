import { ICreateCategoryDTO } from "../dtos/ICreateCategoryDTO";
import { Category } from "../models/Category";

interface ICategoriesRepository {
  index(): Category[] | undefined;
  show(id: string): Category | undefined;
  create({ name, description }: ICreateCategoryDTO): Category;
  findByName(name: string): Category;
  findById(id: string): Category;
}

export { ICategoriesRepository };
