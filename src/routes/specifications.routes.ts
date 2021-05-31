import { Router } from "express";

import { specificationCreateController } from "../modules/cars/useCases/specifications/specificationCreate";
import { specificationIndexController } from "../modules/cars/useCases/specifications/specificationIndex";

const specificationsRoutes = Router();

specificationsRoutes.get("/", (request, response) => {
  return specificationIndexController.handle(request, response);
});

specificationsRoutes.post("/", (request, response) => {
  return specificationCreateController.handle(request, response);
});

export { specificationsRoutes };
