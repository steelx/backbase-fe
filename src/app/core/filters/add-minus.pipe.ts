import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'addMinus'
})
export class AddMinusPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return -value;
  }

}
