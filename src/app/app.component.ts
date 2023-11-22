import { Component, OnInit } from '@angular/core';
import { Currency } from './shared/enums/currency';
import { DataService } from './services/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'CurrencyConverter';
  
  selectedCurrency: Currency = Currency.UAH;
  apiResult: any;

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.getCurrenciesRate(this.selectedCurrency).subscribe((data: any) => {
      this.apiResult = data;
    });
  }
}
