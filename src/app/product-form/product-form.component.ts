import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ProductService, Product } from '../product.service';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {

  name = '';
  price = 0;

  @Output() productAdded = new EventEmitter<void>();

  constructor(private productService: ProductService) {}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  addProduct() {
    const newProduct: Product = { id: 0, name: this.name, price: this.price };
    this.productService.addProduct(newProduct);
    this.productAdded.emit();
  }

}
