import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ProductsService } from '../services/products.service';
@Component({
  selector: 'app-delete-user',
  templateUrl: './delete-user.component.html',
  styleUrls: ['./delete-user.component.css']
})
export class DeleteProductComponent implements OnInit {
  productRef = new FormGroup({
    productCode:new FormControl(),
  })

  msg?: string;
  constructor(public productService:ProductsService) { }

  ngOnInit(): void {
  }
  deleteProduct() {
    let deleteInfo = this.productRef.value;
    console.log(deleteInfo);
    this.productService.deleteProduct(deleteInfo)
    .subscribe(result=>this.msg=result,error=>console.log(error));
    this.productRef.reset();
  }
}
