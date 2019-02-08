import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
  pure: false
})
// value does not have to be a string, can also be an array
export class FilterPipe implements PipeTransform {
  transform(value: any, filterString: string, propName: string) {
    if ( value.length === 0 || filterString === '') {
      return value;
    }
    const filterArray = [];
    for (const item of value) {
      if ( item[propName] === filterString) {
        filterArray.push(item);
      }
    }
    return filterArray;
  }
}
