import fetch from 'isomorphic-unfetch';
import 'regenerator-runtime/runtime';
import cookie from 'cookie';

const parseAtobNode = (data) => JSON.parse(Buffer.from(data, 'base64').toString('binary'));
const parseAtob = (data) => JSON.parse(atob(data));

import { getCookie, removeCookie, setCookie } from './cookie';

const REFRESH_TOKEN_KEY = 'REFRESH_TOKEN_KEY';
const ACCESS_TOKEN_KEY = 'ACCESS_TOKEN_KEY';
const EXPIRE_KEY = 'EXPIRE_KEY';

function _debounce(func, wait) {
  let timeout;
  return function innerDebounce(...args) {
    const context = this;
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(context, args), wait);
  };
}

function _parseTokenData(accessToken) {
  let tokenData = {};
  if (!accessToken) return tokenData;
  try {
    const [, payload] = accessToken.split('.');
    tokenData = process.browser ? parseAtob(payload) : parseAtobNode(payload);
  } catch (error) {
    _redirectToLogin();
  }
  return tokenData;
}

function post(url, data) {
  return fetch(url, {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json',
    },
  });
}

function _redirectToLogin() {
  if (process.env.DISABLE_UNAUTHORIZED_REDIRECT) return;
  if (AuthService.IS_PUBLIC) return;
  AuthService.redirect(process.env.LOGIN_URL);
}

export class AuthService {
  static STUDENT_ROLE = 'student';
  static COACH_ROLE = 'coach';
  static SUPER_ADMIN_ROLE = 'super_admin';
  static REFRESH_TOKEN_KEY = REFRESH_TOKEN_KEY;
  static ACCESS_TOKEN_KEY = ACCESS_TOKEN_KEY;
  static EXPIRE_KEY = EXPIRE_KEY;
  static AUTH_KEY_LIST = [EXPIRE_KEY, ACCESS_TOKEN_KEY, REFRESH_TOKEN_KEY];
  static IS_PUBLIC = false;

  /**
   * Check is user role COACH according to access token info
   */
  static isCoach() {
    const { role } = this.getTokenData();
    return role === this.COACH_ROLE;
  }

  /**
   * Check is user role STUDENT according to access token info
   */
  static isStudent() {
    const { role } = this.getTokenData();
    return role === this.STUDENT_ROLE;
  }

  /**
   * Check is user role SUPERADMIN according to access token info
   */
  static isSuperAdmin() {
    const { role } = this.getTokenData();
    return role === this.SUPER_ADMIN_ROLE;
  }

  static setIsPublic(isPublic) {
    this.IS_PUBLIC = isPublic;
  }

  /**
   * Perform login to our system using password and email
   * @param {object} {email, password}
   */
  static async login({ email, password }) {
    const response = await post(`${process.env.API_URL}/token/`, {
      email,
      password,
    });
    const data = await response.json();
    if (data.access) {
      AuthService.setAuthData(data);
    }
    return data;
  }

  /**
   * Perform logout action(clear saved tokens data and redirect to login)
   */
  static logout() {
    AuthService.resetAuthData();
    _redirectToLogin();
  }

  /**
   * Read present token data, return object with role, expire date, user_id
   */
  static getTokenData() {
    const availableToken = this.getAccessToken() || this.getRefreshToken();
    return _parseTokenData(availableToken);
  }

  /**
   * Refresh tokens paid from API using refresh token saved in cookies
   */
  static async refreshTokens() {
    try {
      const isRefreshTokenValid = !!this.getRefreshToken() && this.getRefreshToken() !== 'undefined'
      if (isRefreshTokenValid) {
        const response = await post(`${process.env.API_URL}/token/refresh/`, {
          refresh: this.getRefreshToken(),
        });
        const data = await response.json();
        AuthService.setAuthData(data);
        return response;
      } else {
        throw new Error('Refresh token is not valid');
      }
    } catch (error) {
      console.log('refresh token error', error)
      AuthService.resetAuthData();
      _redirectToLogin();
    }
  }

  /**
   * Check is access token expired
   */
  static isAccessTokenExpired() {
    const accessTokenExpDate = this.getExpire() - 10;
    const nowTime = Math.floor(new Date().getTime() / 1000);
    return accessTokenExpDate <= nowTime;
  }

  static hasRefreshToken() {
    return !!getCookie(REFRESH_TOKEN_KEY);
  }

  static setRefreshToken(token, exp) {
    setCookie(REFRESH_TOKEN_KEY, token, exp);
  }

  static setAccessToken(token, exp) {
    setCookie(ACCESS_TOKEN_KEY, token, exp);
  }

  static setExpire(exp) {
    setCookie(EXPIRE_KEY, exp);
  }

  static removeRefreshToken() {
    removeCookie(REFRESH_TOKEN_KEY);
  }

  static removeAccessToken() {
    removeCookie(ACCESS_TOKEN_KEY);
  }

  static removeExpire() {
    removeCookie(EXPIRE_KEY);
  }

  static getExpire() {
    return getCookie(EXPIRE_KEY);
  }

  static getRefreshToken() {
    return getCookie(REFRESH_TOKEN_KEY);
  }

  static getAccessToken() {
    const token = getCookie(ACCESS_TOKEN_KEY);
    //if (!token) _redirectToLogin();
    return token;
  }

  static getAuthTokens() {
    return AuthService.AUTH_KEY_LIST.reduce((acc, field) => ({ ...acc, [field]: getCookie(field) }), {});
  }

  /**
   * Return Authorization header in format "Bearer token"
   */
  static getBearer() {
    return `Bearer ${this.getAccessToken()}`;
  }

  static resetAuthData() {
    AuthService.setRefreshToken('');
    AuthService.setAccessToken('');
    AuthService.setExpire('');
  }

  static removeAuthTokens() {
    AuthService.removeAccessToken();
    AuthService.removeRefreshToken();
    AuthService.removeExpire();
  }

  static setAuthData({ access, refresh } = {}) {
    const accessToken = access;
    const refreshToken = refresh;
    const { exp } = _parseTokenData(access);
    const { exp: expRefresh } = _parseTokenData(refresh);
    AuthService.setRefreshToken(refreshToken, expRefresh);
    AuthService.setAccessToken(accessToken, exp);
    AuthService.setExpire(exp);
  }

  static resetSSRObjects() {
    process.SERVER_COOKIE = {};
    process.REQ_OBJ = null;
    process.RES_OBJ = null;
  }

  static setServerCookie({ cookie: cookieData, req, res, withoutReset = false }) {
    if (!withoutReset) {
      AuthService.resetSSRObjects();
    }
    if (cookieData) {
      const actualCookie = typeof cookieData === 'string' ? cookie.parse(cookieData) : cookieData;
      process.SERVER_COOKIE = { ...process.SERVER_COOKIE, ...actualCookie };
    }
    if (req) process.REQ_OBJ = req;
    if (res) process.RES_OBJ = res;
  }

  static redirect(url = '/', res = null) {
    const resObj = res || process.RES_OBJ;
    if (resObj && !process.browser && resObj.writeHead) {
      resObj.writeHead(302, { Location: url });
      resObj.end();
    }
    if (process.browser && window) {
      window.location.href = url;
    }
  }
}

AuthService.debounceRefreshTokens = _debounce(() => AuthService.refreshTokens(), 1000);
