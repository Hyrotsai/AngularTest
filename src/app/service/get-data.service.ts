import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from "../../environments/environment"
import { Observable } from "rxjs"

@Injectable({
  providedIn: 'root'
})
export class GetDataService {
  baseUrl = environment.apiURLv2
  constructor(private httpClient: HttpClient) { }

  getDataAllCountry() {
    return this.httpClient.get<any[]>(`${this.baseUrl}/all`);
  }

  getDataFromUrl(url: any) {
    return this.httpClient.get(url);
  }

  getDataCountry(country: string): Observable<any> {
    return this.httpClient.get(`${this.baseUrl}/name/${country}`);
  }

}

