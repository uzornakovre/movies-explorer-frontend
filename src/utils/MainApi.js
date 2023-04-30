class Api {
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

  getCurrentUser(token) {
    return fetch(`${this._url}/users/me`, {
      headers: {
        ...this._headers,
        'Authorization': `Bearer ${token}`
      }
    }).then(this._checkStatus)
  }

  updateUserInfo(userData, token) {
    return fetch(`${this._url}/users/me`, {
      method: 'PATCH',
      headers: {
        ...this._headers,
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify({
        name:  userData.name,
        email: userData.email
      })
    }).then(this._checkStatus);
  }

  getMovies(token) {
    return fetch(`${this._url}/movies`, {
      headers: {
        ...this._headers,
        'Authorization': `Bearer ${token}`
      }
    }).then(this._checkStatus);
  }

  saveMovie(movieData, token) {
    return fetch(`${this._url}/movies`, {
      method: 'POST',
      headers: {
        ...this._headers,
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify({
        country: movieData.country,
        director: movieData.director,
        duration: movieData.duration,
        year: movieData.year,
        description: movieData.description,
        image: `https://api.nomoreparties.co${movieData.image.url}`,
        trailerLink: movieData.trailerLink,
        nameEN: movieData.nameEN,
        nameRU: movieData.nameRU,
        thumbnail: `https://api.nomoreparties.co${movieData.image.formats.thumbnail.url}`,
        movieId: movieData.id
      })
    }).then(this._checkStatus);
  }

  deleteMovie(id, token) {
    return fetch(`${this._url}/movies/${id}`, {
      method: 'DELETE',
      headers: {
        ...this._headers,
        'Authorization': `Bearer ${token}`,
      }
    }).then(this._checkStatus)
  }
}

export const mainApi = new Api({
  baseUrl: 'https://api.movies.diploma.nomoredomains.monster',
  headers: {
    'Content-Type': 'application/json',
    'Origin': 'http://localhost:3000'
  }
}); 