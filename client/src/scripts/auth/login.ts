import {sendUnauthorizedRequest} from "../api/request.ts";
import type {RegisterData} from "./register.ts";

type LoginResponse = {
    token: string;
    tokenType: string;
    expiresIn: number;
}

export type LoginData = {
    email: string
    password: string
}

export async function login(data: RegisterData) {
    const response = await sendUnauthorizedRequest("/api/auth/login", data);

    return await response.json() as LoginResponse;
}

