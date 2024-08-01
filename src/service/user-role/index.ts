import { USER_ROLE_PATH } from "config/api.routes";
import services from "service/axios";

const getUserRoleService = async () => {
  try {
    const res = await services.wt_api(`${USER_ROLE_PATH}`, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });
    const { data, status } = res;
    return { data, success: status === 200 };
  } catch (error) {
    return { error };
  }
};

export default getUserRoleService;
