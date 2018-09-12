import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
  providers: [ProductService]
})
export class ProductListComponent implements OnInit {
  array : number[];
  items : any[];
  constructor(private productService: ProductService) {

  }

  ngOnInit() {
    this.array=this.productService.getProducts();
    console.log(this.array);
    this.productService.person$().subscribe(person => this.items = person);

    this.productService.getRestItems();
    //this.items=this.productService.getRestItemss();
    console.log(this.items);
  }
}
