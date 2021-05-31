import { Request, Response } from "express";
import { SpecificationCreateUseCase } from "./SpecificationCreateUseCase";

class SpecificationCreateController {
  constructor(private specificationCreateUseCase: SpecificationCreateUseCase) {}

  handle(request: Request, response: Response): Response {
    const { name, description } = request.body;
    const specification = this.specificationCreateUseCase.execute({ name, description });
    return response.status(201).json(specification);
  }
}

export { SpecificationCreateController };
