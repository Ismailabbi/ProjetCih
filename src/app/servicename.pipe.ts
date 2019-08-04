import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'servicename'
})
export class ServicenamePipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    return null;
  }

}
