import { Router } from "express";
import { Specification } from "../models/Specification";
import { SpecificationsRepository } from "../repositories/SpecificationsRepository";

const specificationsRoutes = Router();

const specifications = [];
const specificationsRepository = new SpecificationsRepository();

interface ICreateSpecificationDTO {
  id: string;
  name: string;
  description: string;
  created_at: Date;
  updated_at: Date;
}

specificationsRoutes.get("/", (request, response) => {
  const specifications = specificationsRepository.index();
  return response.json(specifications);
});

specificationsRoutes.post("/", (request, response) => {
  const { name, description } = request.body;

  const specification = specificationsRepository.create({ name, description});

  return response.status(201).json(specification);
});

export { specificationsRoutes };
