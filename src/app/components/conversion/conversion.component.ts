import { Component, Input } from '@angular/core';
import { Currency } from 'src/app/shared/enums/currency';

@Component({
  selector: 'app-conversion',
  templateUrl: './conversion.component.html',
  styleUrls: ['./conversion.component.scss']
})
export class ConversionComponent {
  @Input() apiResult: any;
  @Input() selectedInitialCurrency: Currency = Currency.UAH;

  selectedBaseCurrency: Currency = Currency.UAH;
  selectedCurrency: Currency = Currency.EUR;
}
