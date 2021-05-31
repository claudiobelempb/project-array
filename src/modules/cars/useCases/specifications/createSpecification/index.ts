import { SpecificationsRepository } from "../../../repositories/implementations/SpecificationsRepository";
import { SpecificationCreateUseCase } from "./SpecificationCreateUseCase";
import { SpecificationCreateController } from "./SpecificationCreateController";

const specificationsRepository = new SpecificationsRepository();
import specificationCreateUseCase = new SpecificationCreateUseCase();
import specificationCreateController = new SpecificationCreateController();