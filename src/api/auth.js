import { setCookie, deleteCookie } from "@/utils/cookies"; // Asegúrate de tener una función deleteCookie en utils
import { getRequest, postRequest, getAuthRequest } from "./request";

export async function login(values) {
    try {
        const response = await postRequest("auth/login", values);
        if (response) {
            setCookie("token", response.token, 7);
            setCookie("session", response, 7);
            return true;
        }
    } catch (error) {
        console.error("Error al hacer login:", error);
    }
    return false;
}

export async function register(values) {
    try {
        console.log(values);
        const response = await postRequest("auth/register", values);
        if (response) {
            setCookie("token", response.token, 7);
            return true;
        }
        console.log(response);
    } catch (error) {
        console.error("Error during registration:", error);
    }
    return false;
}

export async function getUser(token) {
    try {
        console.log(token);
        const response = await getAuthRequest('api/user/ver', token)
        return response
    } catch (error) {
        console.error("Error getting user:", error);
    }
    return false;
}

export function logout() {
    deleteCookie("token");
}
