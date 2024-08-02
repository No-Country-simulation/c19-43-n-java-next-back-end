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
        // console.log(response);
        if (!response.ok) {
            throw new Error("Error en la consulta");
        }
        const data = await response.json();
        // console.log(data);
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

export async function getRequestVals(endpoint,values) {
    let test = 0;
    if(test) console.log("Datos de Consulta",`url:${api_url}${endpoint}`,JSON.stringify(values))
    try {
        const response = await fetch(`${api_url}${endpoint}`, {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
            body: (values == null?null:JSON.stringify(values)),
          })
        const data = await response.json();
        return data;
    } catch (error) {
        console.error(error);
    }
}

export async function getAuthRequest(endpoint, token) {
    try {
        const response = await fetch(`${api_url}${endpoint}`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        const data = await response.json();
        return data;
    } catch (error) {
        console.error(error);
    }
}

export async function postAuthRequest(endpoint, data, token) {
    const response = await fetch(`${api_url}${endpoint}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(data)
    });

    if (!response.ok) {
        throw new Error('Network response was not ok');
    }

    return response.json();
}
