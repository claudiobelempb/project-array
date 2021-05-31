import { CategoriesRepository } from "../../../repositories/implementations/CategoriesRepository";
import { CategoryIndexController } from "./CategoryIndexController";
import { CategoryIndexUseCase } from "./CategoryIndexUseCase";

const categoriesRepository = CategoriesRepository.getInstance();
const categoryIndexUseCase = new CategoryIndexUseCase(categoriesRepository);
const categoryIndexController = new CategoryIndexController(categoryIndexUseCase);

export { categoryIndexController };