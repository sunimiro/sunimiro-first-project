import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { products } from "../products";
import { CartService } from "../cart.service";
import { NgForOf } from "@angular/common";

@Component({
  selector: "app-product-details",
  templateUrl: "./product-details.component.html",
  styleUrls: ["./product-details.component.css"]
})
export class ProductDetailsComponent implements OnInit {
  product;

  constructor(
    private route: ActivatedRoute,
    private cartService: CartService
  ) {}

  addToCart( product ) {
    this.cartService.addToCart(product);
    window.alert("product " + product.name + " has been added to the cart!");
  }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.product = products[+params.get("productId")];
    //  window.alert(this.product.name);
    });
  }
  notify (item){
    window.alert(products[item.id])
  }

}
