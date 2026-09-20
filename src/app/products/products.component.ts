import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
    selector: 'app-products',
    imports: [CommonModule],
    templateUrl: './products.component.html'
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