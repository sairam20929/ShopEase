import { Component, ViewChild } from '@angular/core';
import { ProductListComponent } from './product-list/product-list.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  @ViewChild(ProductListComponent) productList!: ProductListComponent;

  reloadProducts() {
    this.productList.ngOnInit();
  }
}
