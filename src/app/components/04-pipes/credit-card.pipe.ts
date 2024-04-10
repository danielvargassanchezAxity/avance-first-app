import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'creditCard'
})
export class CreditCardPipe implements PipeTransform {

  transform(value: string): unknown {
    if (value.length == 16) {
      const lastFourDigits = value.slice(-4);
      return "**** **** **** " + lastFourDigits;
    }
    if (value.length == 15) {
      const lastFourDigits = value.slice(-4);
      return "**** **** *** " + lastFourDigits
    }
    return value;
  }

}
