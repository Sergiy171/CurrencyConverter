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

  currencies = Object.values(Currency);

  selectedBaseCurrency: Currency = Currency.UAH;
  selectedCurrency: Currency = Currency.EUR;

  baseCurrency: Currency = Currency.UAH;
  baseCurrencyValue: number = 1;
  resultCurrency: Currency = Currency.EUR;
  resultCurrencyValue: number = 1;

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.resultCurrencyValue = this.dataService.getConvertedResultValue(this.baseCurrencyValue, this.getConvertedCurrencyRate());
  }

  onBaseCurrencyChange(event: any): void {
    this.resultCurrencyValue = this.dataService.getConvertedResultValue(this.baseCurrencyValue, this.getConvertedCurrencyRate());
  }

  onBaseCurrencyValueChange(event: any): void {
    this.baseCurrencyValue = event;
    this.resultCurrencyValue = this.dataService.getConvertedResultValue(this.baseCurrencyValue, this.getConvertedCurrencyRate());
  }

  onResultCurrencyChange(): void {
    this.baseCurrencyValue = this.dataService.getConvertedBaseValue(this.resultCurrencyValue, this.getConvertedCurrencyRate());
  }

  onResultCurrencyValueChange(event: any): void {
    this.resultCurrencyValue = event;
    this.baseCurrencyValue = this.dataService.getConvertedBaseValue(this.resultCurrencyValue, this.getConvertedCurrencyRate());
  }

  private getConvertedCurrencyRate(): number {
    if (this.baseCurrency !== this.selectedInitialCurrency) {
      return this.apiResult[this.selectedInitialCurrency][this.resultCurrency] / this.apiResult[this.selectedInitialCurrency][this.baseCurrency];
    }

    return this.apiResult[this.selectedInitialCurrency][this.resultCurrency];
  }
}
