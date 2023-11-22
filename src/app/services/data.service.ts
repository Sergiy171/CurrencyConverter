import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  readonly CURRENCIES_API = 'https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/uah.json';

  constructor(private httpClient: HttpClient) { }

  public getCurrenciesRate(): Observable<any> {
    return this.httpClient.get(this.CURRENCIES_API);
  }
}
