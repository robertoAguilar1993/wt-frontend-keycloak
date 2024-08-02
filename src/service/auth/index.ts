/* eslint-disable */

import Keycloak from "keycloak-js";

const _kc = new Keycloak("/keycloak.json");
const tokenSecondsExpiration = 1800;
/**
 * Initializes Keycloak instance and calls the provided callback function if successfully authenticated.
 *
 * @param onAuthenticatedCallback
 */

const initKeycloak = (onAuthenticatedCallback: any) => {
  _kc
    .init({
      checkLoginIframe: false,
      onLoad: "login-required",
      silentCheckSsoRedirectUri: window.location.origin,
      pkceMethod: "S256",
    })
    .then((authenticated) => {
      if (authenticated) {
        const investmentOfficeId = _kc.tokenParsed?.investmentOfficeId ?? "";
        localStorage.setItem("wt_api_token", _kc.token || "");
        localStorage.setItem("wt_api_refresh_token", _kc.refreshToken || "");
        localStorage.setItem("wt_investment_office_id", investmentOfficeId);
      } else {
        console.warn("not authenticated!");
        doLogin();
      }
    })
    .catch((error) => {
      console.log({ error });
    });
};

const doLogin = _kc.login;

const doLogout = _kc.logout;

const getToken = () => _kc.token;

const getRefreshToken = () => _kc.refreshToken;

const updateToken = (successCallback: any) => {
  return _kc
    .updateToken(tokenSecondsExpiration)
    .then(successCallback)
    .catch(doLogin);
};

const getUsername = () => _kc.tokenParsed?.preferred_username;

const getCurrentUser = () => _kc.tokenParsed;

export default {
  initKeycloak,
  doLogin,
  doLogout,
  getToken,
  getRefreshToken,
  updateToken,
  getUsername,
  getCurrentUser,
};
