import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'repline'
})
export class ReplinePipe implements PipeTransform {

  transform(value: string): string {

    return value.replace(/-/gi, '_');
  }

}
