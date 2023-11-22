import { Component, Input, OnInit } from '@angular/core';
import { Currency } from 'src/app/shared/enums/currency';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input() selectedCurrency: Currency = Currency.UAH;
  @Input() apiResult: any;

  constructor() { }

  ngOnInit(): void {
  }
}
