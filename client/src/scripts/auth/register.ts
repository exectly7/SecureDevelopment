import {sendUnauthorizedRequest} from "../api/request.ts";

type RegisterResponse = {
    token: string;
    tokenType: string;
    expiresIn: number;
}

export type RegisterData = {
    email: string
    password: string
}

export async function register(data: RegisterData) {
    const response = await sendUnauthorizedRequest("/api/auth/register", data);

    return await response.json() as RegisterResponse;
}

