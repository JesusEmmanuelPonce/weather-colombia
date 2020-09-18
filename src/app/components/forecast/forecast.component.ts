import { OpenweathermapService } from './../../services/openweathermap.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-forecast',
  templateUrl: './forecast.component.html',
  styleUrls: ['./forecast.component.sass']
})
export class ForecastComponent{
  // constructor(private openweathermapService: OpenweathermapService) {
  //   openweathermapService.getForecast();
  // }
    data = [
      {
        id: 1,
        day: 'Friday',
        weather: 'Rain',
        min: '23',
        max: '32'
      },
      {
        id: 2,
        day: 'Saturday',
        weather: 'Clear',
        min: '23',
        max: '32'
      },
      {
        id: 3,
        day: 'Friday',
        weather: 'Clouds',
        min: '23',
        max: '32'
      },
    ];
}
