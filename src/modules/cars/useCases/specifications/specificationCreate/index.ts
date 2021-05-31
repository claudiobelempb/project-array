import { SpecificationsRepository } from "../../../repositories/implementations/SpecificationsRepository";
import { SpecificationCreateUseCase } from "./SpecificationCreateUseCase";
import { SpecificationCreateController } from "./SpecificationCreateController";

const specificationsRepository = SpecificationsRepository.getInstance();
const specificationCreateUseCase = new SpecificationCreateUseCase(specificationsRepository)
const specificationCreateController = new SpecificationCreateController(specificationCreateUseCase);

export { specificationCreateController };