import type { DataExceptions } from "@modules/core/domain/exceptions/models";
import type { IHttpRequestService } from "@modules/core/providers/http/interfaces/http.repository";
import Errors from "@modules/core/guards/exceptions";
export class BaseRepository {
    constructor(public readonly client: IHttpRequestService) {};

    handleErrors(error: Error | any): DataExceptions  {
        const { status } = error;
        return Errors(status)[status as keyof typeof Errors ?? '500'];
    }
}