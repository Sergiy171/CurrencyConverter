import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  currency: string = '';
  value: string = '';

  apiResult: any;

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.getCurrenciesRate().subscribe((data: any) => {
      this.apiResult = data;
    });
  }
}
