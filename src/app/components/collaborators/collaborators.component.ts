import { OpenweathermapService } from './../../services/openweathermap.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-collaborators',
  templateUrl: './collaborators.component.html',
  styleUrls: ['./collaborators.component.sass']
})
export class CollaboratorsComponent{
  weatherParis: any = [];
  humidity: number;
  temp: number;
  visibility: number;

  constructor(private openweathermap: OpenweathermapService) {
    this.openweathermap.getWeatherParis()
      .subscribe((data: any) => {
        this.weatherParis = data;
        this.humidity = data.main.humidity;
        this.temp = data.main.temp;
      });
   }
}
