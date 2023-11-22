import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { Currency } from 'src/app/shared/enums/currency';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  currency: string = '';
  value: string = '';

  apiResult: any;

  selectedCurrency: Currency = Currency.UAH;

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.getCurrenciesRate(this.selectedCurrency).subscribe((data: any) => {
      this.apiResult = data;
    });
  }
}
