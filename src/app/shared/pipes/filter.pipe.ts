import { Pipe, PipeTransform } from '@angular/core';
import { IOption } from '../interfaces/interfaces';

@Pipe({
  name: 'arrayFilter',
})
export class ArrayFilterPipe implements PipeTransform {
  transform(array: IOption[], size?: number) {
    if (size) {
      const particularItem = array.filter(item => item.size === size)[0];

      return particularItem.amount;
    }
    return array[0].amount;
  }
}
