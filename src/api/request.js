import { useToast } from "@/components/ui/use-toast"

const api_url = "https://telemed-nocountry.rj.r.appspot.com/";

export async function postRequest(endpoint, values) {
    try {
        const response = await fetch(`${api_url}${endpoint}`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(values),
        });
        console.log(response);
        if (!response.ok) {
            throw new Error("Something went wrong");
        }
        const data = await response.json();
        console.log(data);
        return data;
    } catch (error) {
        console.error(error);
    }
}

export async function getRequest(endpoint) {
    try {
        const response = await fetch(`${api_url}${endpoint}`)
        const data = await response.json();
        return data;
    } catch (error) {
        console.error(error);
    }
}
