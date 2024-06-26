import type { DataExceptions } from "../domain/exceptions/models";
import type { IHttpRequestService } from "../providers/http/interfaces/http.repository";
import Errors from "./exceptions";
export class BaseRepository {
    constructor(public readonly client: IHttpRequestService) {};

    handleErrors(error: Error | any): DataExceptions  {
        const { code, status } = error;
        return Errors(code)[status as keyof typeof Errors ?? '500'];
    }
}