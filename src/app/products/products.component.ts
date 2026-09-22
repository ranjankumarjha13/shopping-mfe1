
import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'app-products',
    imports: [],
    changeDetection: ChangeDetectionStrategy.Eager,
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