import { Inject, LOCALE_ID, Pipe, PipeTransform } from '@angular/core';
import { AuthQuery } from '../auth.query';
import { DatePipe } from '@angular/common';
import { Nullable } from '@shared/type/nullable';

@Pipe({ name: 'authDateFormat' })
export class AuthDateFormatPipe implements PipeTransform {
  constructor(private authQuery: AuthQuery, @Inject(LOCALE_ID) locale: string) {
    this.datePipe = new DatePipe(locale);
  }

  datePipe: DatePipe;

  transform(value: Nullable<string | Date>): string | null {
    return this.datePipe.transform(value, this.authQuery.getUser()?.dateFormat ?? 'dd/MM/yyyy');
  }
}
