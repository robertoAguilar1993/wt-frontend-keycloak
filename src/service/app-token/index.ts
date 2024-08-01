import { oauth_id, oauth_secret } from "config/api.secret";
import services from "service/axios";
import { handleResponse } from "utils/responseTransformer";

const getAppToken = async () => {
  const query = `grant_type=client_credentials&client_id=${oauth_id}&client_secret=${oauth_secret}`;

  try {
    const res = await services.oauth_api("", {
      method: "POST",
      data: query,
      headers: {
        Accept: "application/json",
        "Content-Type": "application/x-www-form-urlencoded",
      },
    });
    const { data, status } = res;
    return handleResponse(data, status, true, null, null, null, null, null);
  } catch (error: any) {
    return handleResponse(
      null,
      error?.response?.status,
      false,
      error,
      null,
      "No se pudo generar el token",
      null,
      null
    );
  }
};

export default getAppToken;
