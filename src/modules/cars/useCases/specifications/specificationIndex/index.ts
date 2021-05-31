import { SpecificationsRepository } from "../../../repositories/implementations/SpecificationsRepository";
import { SpecificationIndexController } from "./SpecificationIndexController";
import { SpecificationIndexUseCase } from "./SpecificationIndexUseCase";

const specificationsRepository = SpecificationsRepository.getInstance();
const specificationIndexUseCase = new SpecificationIndexUseCase(specificationsRepository);
const specificationIndexController = new SpecificationIndexController(specificationIndexUseCase);

export { specificationIndexController };