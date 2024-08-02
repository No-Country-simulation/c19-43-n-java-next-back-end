import { getRequest, postRequest } from "./request";

export async function getAllDoctors() {
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

export async function getDoctor(value) {
    try {
        const response = await getRequest(`api/user/medico/${value}`)
        if (response) {
            console.log(response)
            return response;
        }
    } catch (error) {
        console.error("Error during login:", error);
    }
    return false;
}

export async function getSchedule(value) {
    try {
        const response = await getRequest(`api/consultas/horariosDisponible/${value}`)
        if (response) {
            return response;
        }
    } catch (error) {
        console.error("Error during login:", error);
    }
    return false;
}


