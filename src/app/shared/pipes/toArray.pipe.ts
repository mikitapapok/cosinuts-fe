import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'toArray' })
export class ToArrayPipe implements PipeTransform {
  transform(value: number | null) {
    if (value) {
      return new Array(value / 6);
    }
    return value;
  }
}
