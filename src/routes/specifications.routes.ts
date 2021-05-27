import { Router } from "express";
import { SpecificationsRepository } from "../modules/cars/repositories/SpecificationsRepository";
import { CreateSpecificationService } from "../modules/cars/services/CreateSpecificationService";

const specificationsRoutes = Router();
const specificationsRepository = new SpecificationsRepository();
const createSpecificationService = new CreateSpecificationService(specificationsRepository);

specificationsRoutes.get("/", (request, response) => {
  const specifications = specificationsRepository.index();
  return response.json(specifications);
});

specificationsRoutes.get("/:id", (request, response) => {
  const { id } = request.params;

  const specificationIdExists = specificationsRepository.findById(id);

  if (!specificationIdExists) {
    return response.status(400).json({ error: "Specification id not exists." });
  }

  const specification = specificationsRepository.show(id);
  return response.json(specification);
});

specificationsRoutes.post("/", (request, response) => {
  const { name, description } = request.body;
  const specification = createSpecificationService.execute({name, description});
  return response.status(201).json(specification);
});

export { specificationsRoutes };
