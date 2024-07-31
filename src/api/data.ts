// Archivo para obtener todos los datos y pasarlos al front end
import { getRequestVals } from "./request";
import { ResponseLit } from "./dtypes";

/**
 * 
 * @param url 
 * @param values: Valores a enviar en el post 
 * @returns: Response lit
 */
export async function reqBackend(url:string,values:any) {
  let res:ResponseLit = { r:true, data:null, error:"" }
  try {
    const response = await getRequestVals(url, values);
    if (response) {
      res.data = response
      return res;
    } else {
      throw Error("Sin respuesta");
    }
  } catch (error) {
    console.error("Error:", error);
  }
  res = { r:false, data:null, error:"Error en la consulta" }
  return res;
}

/**
 * 
 * @param id ID del usuario
 * @returns Datos del usuario con ese ID
 */
export async function userVerPerfil(id:any) {
  const res = reqBackend("api/user/ver",{id:id})
  return res
}