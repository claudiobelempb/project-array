import { Request, Response } from "express";
import { SpecificationIndexUseCase } from "./SpecificationIndexUseCase";

class SpecificationIndexController {
  constructor(private specificationIndexUseCase: SpecificationIndexUseCase){}
  handle(request: Request, response: Response): Response{
    const specifications = this.specificationIndexUseCase.execute();
    return response.json(specifications);
  }
}

export { SpecificationIndexController };