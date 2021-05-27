import { Router } from "express";
import { CategoriesRepository } from "../modules/cars/repositories/CategoriesRepository";
import { categoryController } from "../modules/cars/useCases/categories/categoryCreate";
import { categoryIndexController } from "../modules/cars/useCases/categories/categoryIndex";

const categoriesRoutes = Router();
const categoriesRepository = CategoriesRepository.getInstance();

categoriesRoutes.get("/", (request, response) => {
  return categoryIndexController.handle(request, response);
});

categoriesRoutes.get("/:id", (request, response) => {
  const { id } = request.params;

  const categoryIdExists = categoriesRepository.findById(id);

  if (!categoryIdExists) {
    return response.status(400).json({ error: "Category id already exists" });
  }

  const category = categoriesRepository.show(id);

  return response.json(category);
});

categoriesRoutes.post("/", (request, response) => {
  return categoryController.handle(request, response);
});

export { categoriesRoutes };
