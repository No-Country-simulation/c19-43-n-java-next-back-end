import { setCookie, deleteCookie } from "@/utils/cookies"
import { getRequest, postRequest, getAuthRequest, postAuthRequest } from "@/api/request"

export async function getAppointments(token) {
    try {
        const response = await getAuthRequest('api/consultas', token)
        return response
    } catch (error) {
        console.error("Error getting user:", error)
    }
    return false
}

export async function setAppointment(value, token, idDoctor) {
    try {
        const response = await postAuthRequest(`api/consultas/agendar/${idDoctor}`, value, token);
        console.log(response);
        return response;
    } catch (error) {
        console.error("Error setting appointment:", error);
    }
    return false;
}
