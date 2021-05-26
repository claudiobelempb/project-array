import { Router } from "express";
import { CategoriesRepository } from "../repositories/CategoriesRepository";

const categoriesRoutes = Router();
const categoriesRepository = new CategoriesRepository();

categoriesRoutes.get("/", (request, response) => {
  const categories = categoriesRepository.index();
  return response.json(categories);
});

categoriesRoutes.get("/:id", (request, response) => {
  const { id } = request.params;

  const categoryIdExists = categoriesRepository.findById(id);

  if (!categoryIdExists) {
    return response.status(400).json({error: "Category id already exists"});
  }

  const category = categoriesRepository.show(id);

  return response.json(category);
});

categoriesRoutes.post("/", (request, response) => {
  const { name, description } = request.body;

  const categoryNameExists = categoriesRepository.findByName(name);

  if (categoryNameExists) {
    return response.status(400).json({error: "Category name already exists"});
  }

  const category = categoriesRepository.create({
    name,
    description,
  });

  return response.status(201).json(category);
});

export { categoriesRoutes };
