import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartService } from '../../services/cart.service';
import { Product } from '../../models/product.interface';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-list.component.html'
})
export class ProductListComponent {
  products: Product[] = [
    { id: 1, name: 'Laptop Pro', price: 1200 },
    { id: 2, name: 'Mouse Inalámbrico', price: 25 },
    { id: 3, name: 'Teclado Mecánico', price: 80 },
    { id: 4, name: 'Monitor 27"', price: 300 }
  ];

  constructor(private cartService: CartService) {}

  add(product: Product) {
    this.cartService.addToCart(product);
  }
}