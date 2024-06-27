export interface IHttpRequestService {
    get<Response>({ url, params, options}: {url: string, params?: Record<string, string>, options?: Record<string, string>}): Promise<Response>,
    post<ResponseType, Data>({ url, body, options }: {url: string, body?: Data, options?: Record<string, string>}): Promise<ResponseType | void>
    put<ResponseType, Data>({ url, body, options }: {url: string, body?: Data, options?: Record<string, string>}): Promise<ResponseType | void>
}