import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
  name: 'keys',
})
export class KeysPipe implements PipeTransform {
  /**
   * Takes a value and makes it lowercase.
   */
   transform(value: any, args: any[] = null): any {
         return Object.keys(value).map(key => value[key]);
  }
}
