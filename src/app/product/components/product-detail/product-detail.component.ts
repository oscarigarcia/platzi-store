import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Params } from "@angular/router";

import { ProductsService } from "./../../../core/services/products/products.service";
import { Product } from "./../../../core/models/product.model";

@Component({
  selector: "app-product-detail",
  templateUrl: "./product-detail.component.html",
  styleUrls: ["./product-detail.component.scss"],
})
export class ProductDetailComponent implements OnInit {
  product: Product;

  constructor(
    private route: ActivatedRoute,
    private productsService: ProductsService
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      const id = params.id;
      this.fetchProduct(id);
    });
  }

  fetchProduct(id: string) {
    this.productsService.getProduct(id).subscribe((product) => {
      this.product = product;
    });
  }

  createProduct() {
    const newProduct: Product = {
      id: "222",
      title: "Nuevo desde angular",
      image: "../../../../assets/images/mug.png",
      price: 2000,
      description: "es nuevo",
    };
    this.productsService.createProduct(newProduct).subscribe((product) => {
      console.log(product);
    });
  }

  updateProduct() {
    const newProduct: Partial<Product> = {
      price: 50000,
      description: "edición titulo",
    };
    this.productsService.updateProduct("2", newProduct).subscribe((product) => {
      console.log(product);
    });
  }

  deleteProduct() {
    this.productsService.deleteProduct("2").subscribe((product) => {
      console.log(true);
    });
  }
}
