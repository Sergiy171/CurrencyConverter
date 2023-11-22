import { Component, Input, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { Currency } from 'src/app/shared/enums/currency';

@Component({
  selector: 'app-conversion',
  templateUrl: './conversion.component.html',
  styleUrls: ['./conversion.component.scss']
})
export class ConversionComponent implements OnInit {
  @Input() apiResult: any;
  @Input() selectedInitialCurrency: Currency = Currency.UAH;

  // currencies: Currency[] = [Currency.UAH, Currency.EUR, Currency.USD, Currency.PLN];
  // currencies = Currency;
  currencies = Object.values(Currency);

  selectedBaseCurrency: Currency = Currency.UAH;
  selectedCurrency: Currency = Currency.EUR;

  baseCurrency: Currency = Currency.UAH;
  baseCurrencyValue: number = 1;
  resultCurrency: Currency = Currency.EUR;
  resultCurrencyValue: number = 1;
  // currencyValue: number;

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.resultCurrencyValue = this.dataService.getConvertedResultValue(this.baseCurrencyValue, this.getConvertedCurrencyRate());
    // this.currencyValue = this.dataService.getConvertedValue(this.apiResult[this.selectedInitialCurrency], this.selectedInitialCurrency, this.selectedCurrency, this.baseCurrencyValue);
  }

  // onBaseCurrencyChange(): void {

  // }

  onBaseCurrencyValueChange(event: any): void {
    this.baseCurrencyValue = event;
    // this.applyBaseCurrencyValueChange();
    this.resultCurrencyValue = this.dataService.getConvertedResultValue(this.baseCurrencyValue, this.getConvertedCurrencyRate());
  }

  onCurrencyChange(): void {
    this.baseCurrencyValue = this.dataService.getConvertedBaseValue(this.resultCurrencyValue, this.getConvertedCurrencyRate());
  }

  // onCurrencyValueChange(event: any): void {
  //   this.currencyValue = event;
  //   // this.applyCurrencyValueChange();
  // }

  private getConvertedCurrencyRate(): number {
    return this.apiResult[this.selectedInitialCurrency][this.resultCurrency];
  }

  // private applyBaseCurrencyValueChange() {
  //   this.currencyValue = this.dataService.getConvertedValue(this.baseCurrencyValue, this.getConvertedCurrencyRate());
  // }

  // private applyCurrencyValueChange() {
  //   this.currencyValue = this.currencyValue / this.dataService.getConvertedValue(this.baseCurrencyValue, this.getConvertedCurrencyRate());
  // }

  // private applyCurrencyChange() {
  //   this.baseCurrencyValue = this.currencyValue / this.dataService.getConvertedValue(this.baseCurrencyValue, this.getConvertedCurrencyRate());
  // }
}
