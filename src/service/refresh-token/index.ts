import services from "service/axios";
import { handleResponse } from "utils/responseTransformer";

const getAppRefreshToken = async () => {
  const refresh_token = localStorage.getItem("wt_api_refresh_token");

  const query = `grant_type=refresh_token&client_id=wealth-tech-app&refresh_token=${refresh_token}`;

  try {
    const res = await services.auth_refresh_token("", {
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

export default getAppRefreshToken;
