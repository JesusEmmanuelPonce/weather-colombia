import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'icons'
})
export class IconsPipe implements PipeTransform {

  transform(value: string): string {
    if (value === 'Clouds'){
      return 'assets/icons/cloud.png';
    }else if (value === 'Rain'){
      return 'assets/icons/rain.png';
    }else if (value === 'Clear'){
      return 'assets/icons/sun.png';
    }
  }

}
