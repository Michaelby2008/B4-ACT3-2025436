import { Pipe, PipeTransform } from '@angular/core';
import { CartItem } from '../models/product.interface';

@Pipe({
  name: 'total',
  standalone: true
})
export class TotalPipe implements PipeTransform {
  transform(items: CartItem[] | null): number {
    if (!items) return 0;
    return items.reduce((sum, item) => sum + (item.product.price * item.quantity), 0);
  }
}