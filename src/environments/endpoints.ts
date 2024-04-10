import { environment } from "./environment";

export const Endpoints = {
    users: {
        get: `${environment.serverUrl}/users`,
        delete: `${environment.serverUrl}/users`
    }
}