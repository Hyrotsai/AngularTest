import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { GetDataService } from 'src/app/service/get-data.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  providers: [GetDataService]
})
export class DashboardComponent implements OnInit {

  infoCountry: any[] = []
  countrySelect: any
  checkCountry: boolean = false
  tempCode: string = ""
  tempName: string = ""
  arrIdioma: string[] = []

  prueba: any

  keyword = "name";
  keywords = ["name", "region"]
  // keywords = ["name", "capital", "region"]

  constructor(private getData: GetDataService) {
  }

  ngOnInit(): void {
    this.getDataCountry()
  }

  getDataCountry() {
    this.getData.getDataAllCountry().subscribe(data => {
      this.infoCountry = data
      console.log(this.infoCountry)
    }
    )
  }

  fillValue() {
    this.checkCountry = true
  }

  clearValue() {
    this.checkCountry = false
    this.arrIdioma = []
  }

  getMoneda() {
    this.countrySelect.currencies.map((data: any) => {
      this.tempCode = data.code
      this.tempName = data.name
    })
    return `Moneda: ${this.tempName}, Sigla: ${this.tempCode}`
  }

  getIdiomas() {
    this.arrIdioma = []
    this.countrySelect.languages.map((data: { name: string; }) => {
      this.arrIdioma.push(data.name)
    })
    return `Idiomas: ${this.arrIdioma}`
  }
}