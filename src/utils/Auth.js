class Auth {
  constructor({ baseUrl, headers }) {
    this._url = baseUrl;
    this._headers = headers;
  }

  _checkStatus(res) {
    if (res.ok) {
      return res.json();
    } else {
      return Promise.reject(`Ошибка: ${res.status}`);
    }
  }

  register(name, email, password) {
    return fetch(`${this._url}/signup`, {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify({ name, email, password })
    }).then(res => res.json()); 
  }   

  login(email, password) {
    return fetch(`${this._url}/signin`, {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify({ email, password })
    }).then(this._checkStatus)
      .then(data => data);
  }

  checkToken(token) {
    return fetch(`${this._url}/users/me`, {
      headers: {
        ...this._headers,
        'Authorization': `Bearer ${token}`
      }
    }).then(this._checkStatus)
      .then(data => data);
  }
}

export const auth = new Auth({
  baseUrl: 'https://api.movies.diploma.nomoredomains.monster',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    'Origin': 'http://localhost'
  }
});