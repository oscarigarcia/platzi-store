import { MaterialModule } from "./../material/material.module";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { AdminRoutingModule } from "./admin-routing.module";
import { NavComponent } from "./components/nav/nav.component";
import { ProductFormComponent } from "./components/product-form/product-form.component";
import { ProductsListComponent } from "./components/products-list/products-list.component";
import { ReactiveFormsModule } from "@angular/forms";
import { TableComponent } from "./components/table/table.component";

@NgModule({
  declarations: [
    ProductFormComponent,
    NavComponent,
    ProductsListComponent,
    TableComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    ReactiveFormsModule,
    MaterialModule,
  ],
})
export class AdminModule {}
