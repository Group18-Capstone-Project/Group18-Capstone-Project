import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-user-panel',
  templateUrl: './user-panel.component.html',
  styleUrls: ['./user-panel.component.css']
})
export class UserPanelComponent implements OnInit {
  userName?: string;


  // static value for testing purpose
  // TODO: pre-defined products, you want to replace with the product from MongoDB, using GET
// jing
  // apple: Product = { name: "Apple", price: 1, img: "https://i2.wp.com/ceklog.kindel.com/wp-content/uploads/2013/02/firefox_2018-07-10_07-50-11.png?fit=641%2C618&ssl=1" };
  // pear: Product = { name: "Pear", price: 2, img: "https://www.gisymbol.com/wp-content/uploads/2017/08/Australian-Pears-600x600.png" };
  // orange: Product = { name: "Orange", price: 3, img: "data:image/jpeg;base64,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"};
  // watermelon: Product = { name: "Watermelon", price: 4, img:"data:image/jpeg;base64,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"};
  // products = new Array<Product>(this.apple, this.pear, this.orange, this.watermelon);

  // // empty cart
  // cart = new Array<Product>();
// jing part 

products: {name: string, price: Number, quantity: Number, discount: Number}[] = [];

shoppingCart:Array<any> = [];

  constructor(public activateRoute: ActivatedRoute, public router: Router,public productsService:ProductsService) { }

  ngOnInit(): void {

    this.activateRoute.params.subscribe(data => this.userName = data.user);

    this.products=this.productsService.getAll().subscribe(products=>{this.products = products as any;});

    this.displayProducts();

  }

  displayProducts() {

    console.log(this.products);
    
    for (const item of this.products) {

      let name = item.name;
      let price = "$ " + item.price.toLocaleString("USD", { maximumFractionDigits: 2 });

      let divTag = document.createElement("div");
      divTag.setAttribute("class", "col-sm-6 col-md-3");

      //card
      let cardTag = document.createElement("div");
      cardTag.setAttribute("class", "card");

      //card top
      // let imgTag = document.createElement("img");
      // imgTag.setAttribute("class", "card-img-top");
      // if (item.img) {
      //   imgTag.setAttribute("src", item.img);
      // } else {
      //   imgTag.setAttribute("src", "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxITEhIPDxAQEBAPEBAQEhAPDw8PDg8QFRIWFhUSFRcYHCggGBolGxYTITEhJSkrLi4uFx8zODMsNygtLisBCgoKBQUFDgUFDisZExkrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrK//AABEIAOEA4QMBIgACEQEDEQH/xAAbAAEBAQEBAQEBAAAAAAAAAAAABAMCAQYFB//EADYQAAICAQIEBQIFAQgDAAAAAAABAgMRBCESMUFRBRNhcZGBsQYiMkKh0SQzUmKEweHwFBYj/8QAFAEBAAAAAAAAAAAAAAAAAAAAAP/EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhEDEQA/AP7iAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA5lNLmzKWo7L5A3BI737HPmPuwLQReY+7+T1XS7gWAnjqO6+DWFqfX5A7AAAAAAAAAAAAAAAAAAAAAAAAAPJSxuwDZhZf2+TOyxv27HldbfL5A5bO41N9PkorqS9X3NAJ1pu7+DtadepqAMvIXr8nL066Nm4AllQ/cyaLzmUU+YE1dzXqimE0+RPZTjdbr+TOLxugLgZ1W59zQAAAAAAAAAAAAAAAAAAAPGyS2zL9OhpqZ/t+TKuGXgDqqrPsVJY5CKxsj0AARzsbfN/IFgIeN938scb7v5YFwIeN938scb7v5YFwJKrHndvHIosswAsswRtnspZ3ZtTT1f0QGCfUsqnlfcx1FeN0cVTw/uBYAAAAAAAAAAAAAAAAeSeFk9MdTLbHcCZvqV0QwvVk1cctItA8lLG7Jpah9Nj3VPdIxA7dr5ZOAAAO4Vt8vk1WnXVgTgoen7M8UVHd7vogPIxUVl8+iMpSzuxKWd2aVw/dLl0XcBXD90uXRdymLzuiOyef6GullzX1A3azsRTjh4LifVR5P6Ad6eWVjsakmnlv77FYAAAAAAAAAAAAAAJdS9/oVEl/6mB1pVu2UmGl5P3Nm+oE2p5/RGR+d4T4/Vqq5XVqUfLcozrnhTi45a5bYa3TO9P4rXLTx1cv8A5VSqVr48ZhHHXHX2AuNKa8v0R89/7JhKy3R6qnTvH9osjXwJPlKcFJzhHlu1sfUadflTW+d8rkwPZzSX+xg7302/kh8S8SULKa3GUnqbXVFrGItQlPL9Py9O5hqvHIU6qnSThNzvhxRsXD5cHlqMZb5y3ED9rjaWZc+iJpSzuz8zxPx2Nd9GnlGc56mWE48PDWujlnvh8uzKvE9bHT0y1E4ynw8KjXDDstnJqMYRT6ttAW11/uly+5xZZn+go1ULqYXVvMLIxnH2a5e5+Jf48+OcNPpdRqvKlwWTq8qFcZrnFSskuNrqlnAH7Jtpeb9j87w/xCF1fmwUkk5xlCcXCyE4fqhJPk0fm+H/AIkusjG2rwzVzhZFSjJW6NJxfXDsTA+sM71+V/J3F7J4xty7eh5Pk/ZgRxe5cQF0eS9gPQAAAAAAAAAAAAAkv/U/+9Csl1K390B3peT9zWfJ+zMdK+aKAP53paZVaTT6+lOXDppV6muO7u0/FPEl/mg3lemUVV6eVnhNCrj5ko1ae1QWM2RrnGbgvVpM+v1C3wltjl0Mku23tsB874l+JtLZTZXTYrr7q5Vx0sVLz3OcWlGcMZgt929kfT+E0uFFNcnmVdVcG+7jFJ/YyUVnOFl9cLL+pVF8Md+fRAfP/iCPDqPDm+b1dmF/p7D8z8R6eVurmo/3sfD1dV6W16jjh/Kx9T6uby8vft6ex3XUv1S/5YHxKtV09Lr+UdT4hTCpPKfk11WJfM/Mfwfp+OO/U6uqjTSqg9GlqpyuhKytWSzGqLjGSbeOOXPsfQTecbLC5LC29jfT1Y3a3fz9QPnPww7KJX6DUSg5wf8A5NTrjKEJU2zbkoRbbSjPiWM7ZR+ZovEq9PRPR36laC+FluLbIxxNStc1ZXxrhnxJ7ro8n2mpaz0z36+xhKKfNJ47pPAH4f4a1NllN8rLJXR8yxVXTpjQ7alBfm4UltnO585+HtXoVp6fN8Ztokq48VS11VcK2uceFx2Xof0A701Mcv8AJHl/hiBVXNSSlFpxkk01umnumhPk/ZnSM73+VgSF0eS9iFIvAAAAAAAAAAAAAABhqo7J9jc5nHKwBLVLDRYQNFlM8r1Aw1PP6GRVfXndc0ZxiorL59EB7GKisvn0RjKWd2JyzuzSuv8AdLl9wFVfWXL16lEoJ8yWyzPt2OUwLFBLokZ2Xrpu/wCCZsAGwAANtLzfsYorphherA0MNVLkvqbtkVksvIHVEcv23KzHTR2z3NgAAAAAAAAAAAAAAAAJtTDr3OKp4fp1K5LOxHZDDwBVOxJZ+PUknLO7PDamrO75fcBTVnd8vubygnzOgBn5Me33Hkx7fc0AGfkx7fceTHt9zQAZ+THt9x5Me33NABzGCXJHQMrrcbLn9gONRZ+1fUyrjl4OSumvC9WB2kegAAAAAAAAAAAAAAAAADmcMrDOgBFODXM6rta9UVSinsyaylrluv5AohNPkdECZrG99dwKgYrULrlHatj3A7Bx5se6OXevcDU8bMJajsvkxlJvmwNrL+i+TA6hW3y+SmupL37geU1Y3fP7GoAAAAAAAAAAAAAAAAAAAAAAAAAHE6kzGWnfR5KQBE632ZzgvAEGDpQfZloAljQ/Y1hQlz3NQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB//2Q==");
      // }
      // imgTag.setAttribute("style", "height:225px; width:100%; display:block");

      //card body part
      let cardBodyTag = document.createElement("div");
      cardBodyTag.setAttribute("class", "card-body");

      let nameTag = document.createElement("h5");
      nameTag.setAttribute("class", "card-title");
      nameTag.appendChild(document.createTextNode(name));

      let priceTag = document.createElement("p");
      priceTag.setAttribute("class", "card-text");
      priceTag.appendChild(document.createTextNode(price));

      // let addButton = document.createElement("input");
      // addButton.setAttribute("type", "button");
      // addButton.setAttribute("value", "Add to Cart");
      // addButton.setAttribute("class", "btn btn-primary");
      // addButton.addEventListener("click", () => this.addToCart(item));

      cardBodyTag.appendChild(nameTag);
      cardBodyTag.appendChild(priceTag);

      //adding content to card
      // cardTag.appendChild(imgTag);
      cardTag.appendChild(cardBodyTag);
      // cardTag.appendChild(addButton);

      divTag.appendChild(cardTag);

      // refer the tag using id selector and append the p tag to div tag
      document.getElementById("items")!.appendChild(divTag);
    }
  }
  //TODO: you will add to order collection in MongoDB once you place the order
  // addToCart(item: Product) {
  //   this.cart.push(item);
  //   localStorage.setItem("cartObj", JSON.stringify(this.cart));
  //   document.getElementById("size")!.innerText = this.cart.length + "";
  // }

  // displayCart() {
  //   let cartObj = localStorage.getItem("cartObj") || "{}";
  //   let cartJson = JSON.parse(cartObj);
  //   let tableContent: string = "";
  //   let startTable: string = "<table><tr><th>Item Name</th><th>Price</th></tr>"
  //   let total: number = 0;
  //   for (let i = 0; i < cartJson.length; i++) {
  //     let obj = cartJson[i];
  //     let priceStr = "$ " + Number(obj.price).toLocaleString("USD", { maximumFractionDigits: 2 });
  //     tableContent += "<tr><td>" + obj.name
  //       + "</td><td>" + priceStr + "</td></tr>";
  //     total = total + obj.price;
  //   }
  //   //display table
  //   var endTable = "</table>";
  //   tableContent = startTable + tableContent + endTable;
  //   let cartTable = document.getElementById("cartTable");
  //   if (cartTable) (cartTable as HTMLFormElement).innerHTML = tableContent;

  //   //display total
  //   let totalStr = "$ " + Number(total).toLocaleString("USD", { maximumFractionDigits: 2 });
  //   let totalRow = "<b>" + totalStr + "</b>";
  //   document.getElementById("total_price")!.innerHTML = totalRow;
  // }

}
