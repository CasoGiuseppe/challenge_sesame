import { BaseRepository } from "@/modules/core/data/repository";
import type { IDomainNameRepository } from "../../domain/core/repository/IApplicant";

export class DomainNameRepository extends BaseRepository implements IDomainNameRepository {}