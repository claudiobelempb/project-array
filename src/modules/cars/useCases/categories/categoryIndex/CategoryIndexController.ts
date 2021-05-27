import { Request, Response } from "express";

import { CategoryIndexUseCase } from "../../../useCases/categories/categoryIndex/CategoryIndexUseCase";

class CategoryIndexController {
  constructor(private categoryIndexUseCase: CategoryIndexUseCase) {}

  handle(request: Request, response: Response): Response {
    const categories = this.categoryIndexUseCase.execute();
    return response.json(categories);
  }
}

export { CategoryIndexController };
