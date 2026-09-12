import { Component } from '@angular/core';
import { ProductListComponent } from './components/product-list/product-list.component';
import { CartSummaryComponent } from './components/cart-summary/cart-summary.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ProductListComponent, CartSummaryComponent],
  template: `
    <div style="padding: 20px; font-family: sans-serif;">
      <h1>Sistema de Carrito de Ventas</h1>
      <app-product-list></app-product-list>
      <app-cart-summary></app-cart-summary>
    </div>
  `
})
export class AppComponent {}