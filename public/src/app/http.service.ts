import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) { }

  getCakes() {
    return this._http.get('/api/cakes')
  }

  getCake(id) {
    return this._http.get(`/api/cakes/${id}`)
  }

  createCake(data) {
    return this._http.post('/api/cakes', data)
  }

  updateCakeRating(id, data) {
    return this._http.put(`/api/cakes/${id}`, data)
  }

  deleteCake(id) {
    return this._http.delete(`/api/cakes/${id}`)
  }
}
