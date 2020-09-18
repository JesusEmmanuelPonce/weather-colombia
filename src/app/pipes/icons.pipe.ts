import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'icons'
})
export class IconsPipe implements PipeTransform {

  transform(value: string): string {
    switch (value) {
      case 'Clouds':
        return 'assets/icons/cloud.png';
        break;
      case 'Rain':
        return 'assets/icons/rain.png';
        break;
      case 'Clear':
        return 'assets/icons/clear.png';
        break;
      case 'Haze':
        return 'assets/icons/haze.png';
        break;
      case 'Thunderstorm':
        return 'assets/icons/thunderstorm.png';
        break;
    }
  }

}
