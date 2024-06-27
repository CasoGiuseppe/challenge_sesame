import type { IHttpRequestService } from "./interfaces/http.repository";
import * as interceptor from './interceptor';

const controller = new AbortController()
const signal = controller.signal;
export class HTTPServiceProvider implements IHttpRequestService {
  async get<Response>(
    { url, params, options = {}}: {url: string, params?: Record<string, string>, options?: Record<string, string>}): Promise<Response> {
    const send = await fetch(`${url}?${new URLSearchParams(params)}`, { headers: new Headers(options) });
    return  await send.json()
  }

  async post<Response, Data>(url: string, body: Data, options?: Record<string, string>): Promise<Response> {
    const send = await fetch(`${url}`, { 
      method: 'POST',
      body: JSON.stringify(body),
      headers: new Headers(options),
      signal
    });

    return await send.json()
  }
}