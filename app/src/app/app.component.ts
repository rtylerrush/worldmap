import { Component } from '@angular/core';
import {WorldbankService} from "./worldbank.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  constructor(private worldBankService: WorldbankService){}
  countryName = '';
  countryCapital = '';
  countryIncomeLevel = '';
  countryRegion = '';
  countryLongitude = '';
  countryLatitude = '';

  getapiData(){
    console.log(this.worldBankService.apiData)
    const country = this.worldBankService.apiData[1][0];
    console.log(country);
    this.countryName = country['name'];
    this.countryCapital = country['capitalCity'];
    this.countryIncomeLevel = country['incomeLevel']['value'];
    this.countryRegion = country['region']['value'];
    this.countryLongitude = country['longitude'];
    this.countryLatitude = country['latitude'];
  }

}
