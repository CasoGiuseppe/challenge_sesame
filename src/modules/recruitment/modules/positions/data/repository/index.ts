import { BaseRepository } from "@/modules/core/data/repository";
import type { IDomainNameRepository } from "../../domain/core/repository/IVacancyRepository";

export class DomainNameRepository extends BaseRepository implements IDomainNameRepository {}