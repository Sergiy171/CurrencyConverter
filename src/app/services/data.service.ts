import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { Currency } from '../shared/enums/currency';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor(private httpClient: HttpClient) { }

  public getCurrenciesRate(currency: Currency): Observable<any> {
    let CURRENCIES_API = `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`;

    return this.httpClient.get(CURRENCIES_API);
  }
}
