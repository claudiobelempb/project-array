import { Router } from "express";
import { Specification } from "../models/Specification";

const specificationsRoutes = Router();

const specifications = [];

interface ICreateSpecificationDTO {
  id: string;
  name: string;
  description: string;
  created_at: Date;
  updated_at: Date;
}

specificationsRoutes.get("/", (request, response) => {
  return response.json(specifications);
});

specificationsRoutes.post("/", (request, response) => {
  const { name, description } = request.body;

  const specification = new Specification();

  Object.assign(specification, {
    name,
    description,
    created_at: new Date(),
    updated_at: new Date(),
  });

  specifications.push(specification);

  return response.status(201).json(specification);
});

export { specificationsRoutes };
