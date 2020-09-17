import { OpenweathermapService } from './../../services/openweathermap.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.sass']
})
export class BannerComponent {

  weatherColombia: any = [];
  temp: number;

  constructor(private openweathermap: OpenweathermapService) {
    this.openweathermap.getWeatherColombia()
      .subscribe((data: any) => {
        this.weatherColombia = data;
        this.temp = data.main.temp;
        // console.log(this.weatherColombia);
      });
   }

}
