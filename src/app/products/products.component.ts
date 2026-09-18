import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div>
      <h1>Shopping Microfrontend</h1>

      <div *ngFor="let product of products">
        <h3>{{ product.name }}</h3>
        <p>Price: ₹{{ product.price }}</p>
      </div>
    </div>
  `
})
export class ProductsComponent {

  products = [
    {
      id: 1,
      name: 'Mango Pickle',
      price: 250
    },
    {
      id: 2,
      name: 'Red Chilli',
      price: 180
    }
  ];

}