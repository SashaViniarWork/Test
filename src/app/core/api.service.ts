import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';

@Injectable()
export class ApiService {

  public readonly apiUrl = 'https://api.chucknorris.io';

  constructor(private http: HttpClient) {
  }

  get(url: any) {
    return this.http.get(this.apiUrl + url);
  }

  post(url: any, data: any) {
    const payload = new FormData();
    Object.keys(data).map((key) => {
      payload.append(key, data[key]);
    });
    return this.http.post(this.apiUrl + url, payload, {});
  }
}
