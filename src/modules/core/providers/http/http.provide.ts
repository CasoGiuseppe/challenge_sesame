import type { IHttpRequestService } from "./interfaces/http.repository";

const controller = new AbortController()
const signal = controller.signal;
export class HTTPServiceProvider implements IHttpRequestService {
  async get<Response>(
    { url, params, options = {}}: {url: string, params?: Record<string, string>, options?: Record<string, string>}): Promise<Response> {
    const send = await fetch(`${url}?${new URLSearchParams(params)}`, { headers: options });
    return  await send.json()
  }

  async post<Response, Data>(url: string, body: Data): Promise<Response> {
    const send = await fetch(`${url}`, { 
      method: 'POST',
      body: JSON.stringify(body),
      signal
    });

    return await send.json()
  }
}