import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ProductsService } from '../services/products.service';
@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  productRef = new FormGroup({
    name: new FormControl(),
    price: new FormControl(),
    img: new FormControl(),
    quantity:new FormControl(),
    discount:new FormControl(),
    productCode:new FormControl(),
  })

  msg?: string;
  constructor(public productService:ProductsService) { }

  ngOnInit(): void {
  }
  addProduct() {
    let productInfo = this.productRef.value;
    console.log(productInfo);
    this.productService.addProduct(productInfo)
    .subscribe(result=>this.msg=result,error=>console.log(error));
    this.productRef.reset();
  }

}
