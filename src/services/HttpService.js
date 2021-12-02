import { toast } from 'react-toastify'


import { StorageService } from "services"

export class HttpService {
  static async request (method, path, data = {}, options = {}) {
    const requestUrl = `${process.env.REACT_APP_API_URL}/${path}`

    const headers = new Headers({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    });

    if (!options.noToken) {
      const token = StorageService.get('authData', { isObject: true }).token

      if (token) headers.append("Authorization", `Bearer ${token}`);
    }

    const fetchOptions = {
      method,
      headers,
    }

    if (data) {
      fetchOptions.body = JSON.stringify(data)
    }

    try {
        return await fetch(requestUrl, fetchOptions)
        .then(res => {
          return res.json()
            .then(json => {
              if (res.status >= 200 && res.status < 300) {
                return Promise.resolve(json)
              } else {
                return Promise.reject(json)
              }
            })
            .catch((e) => {
              return Promise.reject(e)
            })
        })
        .catch((e) => {
          return Promise.reject(e)
        });
    } catch {
      toast('Something went wrong while loading some data')
    }
  }

  static async get(path) {
    return await HttpService.request('get', path)
  }

  static async post(path, data) {
    return await HttpService.request('post', path, data)
  }

  static async delete (path, data) {
    return await HttpService.request('delete', path, data)
  }

  static async put(path, data) {
    return await HttpService.request('put', path, data)
  }

  static async patch(path, data) {
    return await HttpService.request('patch', path, data)
  }
}