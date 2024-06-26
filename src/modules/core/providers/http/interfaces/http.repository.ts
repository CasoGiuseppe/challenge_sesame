export interface IHttpRequestService {
    get<Response>({ url, params, options}: {url: string, params?: Record<string, string>, options?: Record<string, string>}): Promise<Response>,
    post<ResponseType, Data>(url: string, body: Data): Promise<ResponseType | void>
}