import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'upperCap'
})
export class UpperCapPipe implements PipeTransform {

  transform(value: string): string {

    if (!value) return ''

    return value[0].toUpperCase()+value.slice(1);
  }

}
