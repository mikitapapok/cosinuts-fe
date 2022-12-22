import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'toFixed',
})
export class ToFixedPipe implements PipeTransform {
  transform(value?: number) {
    if (value) {
      return value.toFixed(2);
    }
    return value;
  }
}
