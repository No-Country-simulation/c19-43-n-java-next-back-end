import { getRequest, postRequest } from "./request";

export async function getAllDoctors(values) {
    try {
        const response = await getRequest("api/user/listarMedicos");
        if (response) {
            return response;
        }
    } catch (error) {
        console.error("Error during login:", error);
    }
    return false;
}
