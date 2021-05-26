import { Router } from "express";
import { CategoriesRepository } from "../repositories/CategoriesRepository";
import { CreateCategoryServise } from "../services/CreateCategoryServise";

const categoriesRoutes = Router();
const categoriesRepository = new CategoriesRepository();
const createCategoryServise = new CreateCategoryServise(categoriesRepository);

categoriesRoutes.get("/", (request, response) => {
  const categories = categoriesRepository.index();
  return response.json(categories);
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
  const { name, description } = request.body;

  const category = createCategoryServise.execute({ name, description });

  return response.status(201).json(category);
});

export { categoriesRoutes };
