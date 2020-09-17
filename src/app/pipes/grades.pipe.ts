import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'grades'
})
export class GradesPipe implements PipeTransform {

  transform(value: number): number {
    const celsius = 273.15;
    value = value - celsius;
    value = Math.floor(value);
    return value;
  }

}
