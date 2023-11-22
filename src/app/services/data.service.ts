import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { Currency } from '../shared/enums/currency';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor(private httpClient: HttpClient) { }

  getCurrenciesRate(currency: Currency): Observable<any> {
    let CURRENCIES_API = `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`;

    return this.httpClient.get(CURRENCIES_API);
  }

  // getConvertedCurrencyRate(currencyRates: any, currencyFrom: Currency, currencyTo: Currency): number {
  //   return 1;
  // }

  // getConvertedValue(currencyRates: any, currencyFrom: Currency, currencyTo: Currency, currencyFromValue: number): number {
  //   return 1;
  // }

  getConvertedValue(currencyFromValue: number, currencyToRate: number): number {
    // let currencyToRate: number = this.getConvertedCurrencyRate

    return currencyFromValue * currencyToRate;
  }
}
