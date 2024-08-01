import axios from "axios";
import {
  WT_API_URL,
  INFOSEL_API_URL,
  OAUTH_API_URL,
  AUTH_URL,
} from "config/api.routes";
import getAppRefreshToken from "service/refresh-token";
import service from "./auth";

const getInvestmentOfficeId = () => {
  const investmentOfficeId = localStorage.getItem("wt_investment_office_id");
  return String(investmentOfficeId ?? "");
};

const wt_api_instance = () => {
  const instance = axios.create({
    baseURL: WT_API_URL,
  });

  instance.interceptors.request.use(
    (config) => {
      const token = localStorage.getItem("wt_api_token");
      if (token) config.headers.Authorization = `Bearer ${token}`;
      // eslint-disable-next-line
      config.headers["investment_office_id"] = getInvestmentOfficeId();
      return config;
    },
    (error) => {
      Promise.reject(error);
    }
  );

  instance.interceptors.response.use(
    (response) => {
      return response;
    },
    async (error) => {
      const originalRequest = error.config;
      const refreshToken = service.getRefreshToken();
      /* eslint no-underscore-dangle: 0 */
      const { status, data } = error.response;
      if (
        (status === 500 &&
          data.error.internal_error.includes("validar el token")) ||
        status === 401
      )
        service.doLogin();
      if (status === 401 && !originalRequest._retry && refreshToken) {
        /* eslint no-underscore-dangle: 0 */
        originalRequest._retry = true;
        const response = await getAppRefreshToken();
        const { access_token, refresh_token } = response.data;
        axios.defaults.headers.common.Authorization = `Bearer ${access_token}`;
        localStorage.setItem("wt_api_refresh_token", refresh_token);
        return instance(originalRequest);
      }
      return Promise.reject(error);
    }
  );

  return instance;
};

const auth_refresh_token_instance = () => {
  const instance = axios.create({
    baseURL: AUTH_URL,
  });

  instance.interceptors.response.use(
    (response) => {
      return response;
    },
    (error) => {
      if (error.response.status === 400 || error.respone.status === 401) {
        localStorage.removeItem("wt_api_token");
        service.doLogout();
      }
      return Promise.reject(error);
    }
  );

  return instance;
};

const infosel_api_instance = () => {
  const instance = axios.create({
    baseURL: INFOSEL_API_URL,
  });

  instance.interceptors.request.use((config) => {
    const token = JSON.parse(String(localStorage.getItem("wtm_tkn")));
    config.headers.Authorization = `Bearer ${token.access_token}`;
    return config;
  });

  return instance;
};

const oauth_api_instance = axios.create({
  baseURL: OAUTH_API_URL,
});

export default {
  wt_api: wt_api_instance(),
  infosel_api: infosel_api_instance(),
  auth_refresh_token: auth_refresh_token_instance(),
  oauth_api: oauth_api_instance,
};
