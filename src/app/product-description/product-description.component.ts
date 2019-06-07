import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-description',
  templateUrl: './product-description.component.html',
  styleUrls: ['./product-description.component.css']
})
export class ProductDescriptionComponent implements OnInit {

  private _productService: ProductService;
  private albumInfo;

  constructor(productService: ProductService) {
    this._productService = productService;
  }

  ngOnInit() {
    this._productService.getAlbum(1)
      .subscribe(response => this.albumInfo = response);
  }

}
