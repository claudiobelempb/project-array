import { CategoriesRepository } from "../../../repositories/CategoriesRepository";
import { CategoryCreateController } from "./CategoryCreateController";
import { CategoryCreateUseCase } from "./CategoryCreateUseCase";

const categoriesRepository = CategoriesRepository.getInstance();
const categoryCreateUseCase = new CategoryCreateUseCase(categoriesRepository);
const categoryController = new CategoryCreateController(categoryCreateUseCase);

export { categoryController }; 