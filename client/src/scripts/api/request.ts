import HttpError from "./httpError.ts";

export async function sendUnauthorizedRequest(url: string, body: any) {
    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
    });

    if (!response.ok) {
        throw new HttpError("request incorrect", response.status);
    }

    return response;
}

export async function sendAuthorizedRequest() {

}
