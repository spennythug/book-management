import fetch from "cross-fetch";
import CONFIG from "../config/config";

export default class BaseService {
  static BASE_URL = CONFIG.BASE_URL;
  static ROUTE_REGEXP = /\{(\w+)\}/g;

  static ERROR_RESPONSE_CODES = [400, 401, 404, 500];

  static buildRoute(route, params) {
    const routeWithParams = route.replace(this.ROUTE_REGEXP, param => {
      const paramKey = param.substring(1, param.length - 1);

      if (!params.hasOwnProperty(paramKey)) {
        throw new Error(`Params must include a key of ${param}`);
      }

      return String(params[paramKey]);
    });

    return routeWithParams;
  }

  static serviceUrl(route) {
    return `${this.BASE_URL}${route}`;
  }

  static async getRequest(route, cache) {
    const response = await fetch(this.serviceUrl(route), {});

    const parsedResponse = await response.json();

    if (this.ERROR_RESPONSE_CODES.indexOf(response.status) > -1) {
      if (parsedResponse.redirect && parsedResponse.redirect === "login") {
        localStorage.removeItem(this.JWT_SECRET);
        window.history.pushState(null, null, "/login");
      }
      throw parsedResponse;
    }
    return parsedResponse;
  }

  static async getJSONRequest(route, cache) {
    try {
      const response = await fetch(this.serviceUrl(route), {
        method: "GET",
        headers: {
          "Content-Type": "application/json"
        }
      });

      return response;
    } catch (e) {
      console.log(e);
      return e;
    }
  }

  static async postJSONRequest(route, params) {
    const body = JSON.stringify(params);
    try {
      const response = await fetch(this.serviceUrl(route), {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body
      });

      return await response.json();
    } catch (e) {
      console.log(e);
      return e;
    }
  }

  static async putJSONRequest(route, params) {
    const body = JSON.stringify(params);

    try {
      const response = await fetch(this.serviceUrl(route), {
        method: "PUT",
        headers: {
          "Content-Type": "application/json"
        },
        body
      });

      return await response.json();
    } catch (e) {
      console.log(e);
      return e;
    }
  }

  static async deleteJSONRequest(route, params) {
    const body = JSON.stringify(params);
    try {
      const response = await fetch(this.serviceUrl(route), {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json"
        },
        body
      });

      return await response.json();
    } catch (e) {
      console.log(e);
      return e;
    }
  }
}
