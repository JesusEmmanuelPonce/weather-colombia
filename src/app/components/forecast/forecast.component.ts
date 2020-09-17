import { OpenweathermapService } from './../../services/openweathermap.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-forecast',
  templateUrl: './forecast.component.html',
  styleUrls: ['./forecast.component.sass']
})
export class ForecastComponent{

  constructor(private openweathermapService: OpenweathermapService) {
    // openweathermapService.getForecast();
   }

}
