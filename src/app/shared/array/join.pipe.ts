import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'join',
})
export class JoinPipe implements PipeTransform {
  transform<T, K extends keyof T>(value: T[], key: K, char = ', '): string {
    return (key !== '.' ? value.map(item => item[key]) : value).join(char);
  }
}
