import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ProductsService } from '../services/products.service';
@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent implements OnInit {
  productRef = new FormGroup({
    productCode: new FormControl(),
    price: new FormControl(),
    quantity:new FormControl(),
    discount:new FormControl()
  })

  msg?: string;
  constructor(public productService:ProductsService) { }
  ngOnInit(): void {
  }
  updateProduct() {
    let updatedProduct = this.productRef.value;
    console.log(updatedProduct);
    this.productService.updateProduct(updatedProduct)
    .subscribe(result=>this.msg=result,error=>console.log(error));
    this.productRef.reset();
  }
}
