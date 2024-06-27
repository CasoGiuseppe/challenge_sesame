export class NetworkConstants {
    static BASE_API_PORT: string = `${import.meta.env.VITE_APP_API_PORT}`;
    static BASE_API_NAMESPACE: string = `${import.meta.env.VITE_APP_API_NAMESPACE}`;
    static BASE_API_OPTIONS: Record<string, string> = { 'Authorization': `Bearer ${import.meta.env.VITE_APP_TOKEN}`};
    static BASE_API_VACANCY_ID: string = `${import.meta.env.VITE_APP_VACANCY_ID}`;
}