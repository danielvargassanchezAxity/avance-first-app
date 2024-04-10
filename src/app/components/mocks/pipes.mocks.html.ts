import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'creditCard'
})
export class MockCreditCardPipe implements PipeTransform {
    transform(value: string): unknown {
        return value;
    }
}