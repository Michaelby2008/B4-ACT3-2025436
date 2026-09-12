import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { CartService } from '../../services/cart.service';
import { CartItem } from '../../models/product.interface';
import { SubtotalPipe } from '../../pipes/subtotal.pipe';
import { TotalPipe } from '../../pipes/total.pipe';

@Component({
  selector: 'app-cart-summary',
  standalone: true,
  imports: [CommonModule, SubtotalPipe, TotalPipe],
  templateUrl: './cart-summary.component.html'
})
export class CartSummaryComponent {
  cartItems$: Observable<CartItem[]>;

  constructor(private cartService: CartService) {
    this.cartItems$ = this.cartService.cart$;
  }

  changeQuantity(productId: number, event: Event) {
    const input = event.target as HTMLInputElement;
    const value = parseInt(input.value, 10);
    if (!isNaN(value)) {
      this.cartService.updateQuantity(productId, value);
    }
  }

  remove(productId: number) {
    this.cartService.removeFromCart(productId);
  }
}