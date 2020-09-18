import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OpenweathermapService {

  constructor(private http: HttpClient) {
    // console.log('Clima');
   }
   getWeatherColombia(): any{
    const apiID = '10bc1d4cce2c287fb40bee7e26088566';
    const nameColombia = 'bogota';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${nameColombia}&appid=${apiID}`;
    return this.http.get(url);
   }
  //  getForecast(){
  //   const apiID = '10bc1d4cce2c287fb40bee7e26088566';
  //   const nameColombia = 'colombia';
  //   const url = `https://api.openweathermap.org/data/2.5/forecast/daily?q=${nameColombia}&cnt=3&appid=${apiID}`;
  //   this.http.get(url)
  //     .subscribe(data => {
  //       console.log(data)
  //     });
  //  }
   getWeatherParis(): any{
    const apiID = '10bc1d4cce2c287fb40bee7e26088566';
    const nameFrancia = 'paris';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${nameFrancia}&appid=${apiID}`;
    return this.http.get(url);
   }
}
