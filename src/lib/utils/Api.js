export default class Api {
  _createNetworkError(message) {
    return new Error(String(message) || "Network Error");
  }

  static headers(authToken, headers) {
    const finalHeaders = {
      Accept: "application/json",
      "Content-Type": "application/json",
      ...headers
    };
    if (authToken) {
      headers["x-access-token"] = authToken;
    }

    return finalHeaders;
  }

  static get({ url, authToken, headers }) {
    const requestHeaders = new Headers(Api.headers(authToken, headers));
    const request = {
      method: "GET",
      headers: requestHeaders
    };

    return fetch(url, request).then(res => res.json());
  }

  static post({ url, authToken, headers, body }) {
    const requestHeaders = new Headers(Api.headers(authToken, headers));
    const request = {
      method: "POST",
      headers: requestHeaders,
      body: JSON.stringify(body)
    };

    return fetch(url, request).then(res => {
      if (res.ok) {
        return res.json();
      } else {
        throw this._createNetworkError();
      }
    });
  }

  static put({ url, authToken, headers, body }) {
    const requestHeaders = new Headers(Api.headers(authToken, headers));
    const request = {
      method: "PUT",
      headers: requestHeaders,
      body: JSON.stringify(body)
    };

    return fetch(url, request).then(res => res.json());
  }

  static delete({ url, authToken, headers }) {
    const requestHeaders = new Headers(Api.headers(authToken, headers));
    const request = {
      method: "DELETE",
      headers: requestHeaders
    };

    return fetch(url, request).then(res => res.json());
  }
}
