import { Request, Response } from "express";

import { CategoryCreateUseCase } from "./CategoryCreateUseCase";

class CategoryCreateController {
  constructor(private categoryCreateUseCase: CategoryCreateUseCase) {}

  handle(request: Request, response: Response): Response {
    const { name, description } = request.body;

    const category = this.categoryCreateUseCase.execute({ name, description });

    return response.status(201).json(category);
  }
}

export { CategoryCreateController };
