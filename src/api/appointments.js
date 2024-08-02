import { setCookie, deleteCookie } from "@/utils/cookies"
import { getRequest, postRequest, getAuthRequest } from "./request"


export async function getAppointments(token) {
    try {
        const response = await getAuthRequest('api/consultas', token)
        return response
    } catch (error) {
        console.error("Error getting user:", error)
    }
    return false
}