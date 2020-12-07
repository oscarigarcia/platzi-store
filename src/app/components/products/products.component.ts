import { ProductsService } from "./../../products.service";
import { Product } from "./../../product.model";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-products",
  templateUrl: "./products.component.html",
  styleUrls: ["./products.component.scss"],
})
export class ProductsComponent implements OnInit {
  constructor(private productsService: ProductsService) {}
  products: Product[];

  ngOnInit() {
    this.products = this.productsService.getAllProducts();
  }

  clickProduct(id: number) {
    console.log("product");
    console.log(id);
  }
}
