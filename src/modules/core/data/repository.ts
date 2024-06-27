import type { DataExceptions } from "../domain/exceptions/models";
import type { IHttpRequestService } from "../providers/http/interfaces/http.repository";
import Errors from "./exceptions";
export class BaseRepository {
    constructor(public readonly client: IHttpRequestService) {};

    handleErrors(error: Error | any): DataExceptions  {
        const { status } = error;
        return Errors(status)[status as keyof typeof Errors ?? '500'];
    }
}