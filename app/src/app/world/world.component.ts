import {Component, inject, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {AppComponent} from "../app.component";
import {WorldbankService} from "../worldbank.service";

@Component({
  selector: 'app-world',
  templateUrl: './world.component.html',
  styleUrl: './world.component.css'
})
export class WorldComponent {

  constructor(private http: HttpClient, private worldBankService: WorldbankService, private app: AppComponent){}

  clickEvent(event: MouseEvent) {
    const selectedCountry = event.target as SVGPathElement;
    const countryId = selectedCountry.id;
    console.log(selectedCountry);

    const apiUrl:string = `http://api.worldbank.org/V2/country/${countryId}?format=json`;

    const data: any = this.http.get(apiUrl).subscribe(data => {
      this.worldBankService.apiData = data;
      this.app.getapiData();
    })

  }

}
