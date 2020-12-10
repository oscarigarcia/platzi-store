import { MaterialModule } from "./../material/material.module";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { AdminRoutingModule } from "./admin-routing.module";
import { ProductFormComponent } from "./components/product-form/product-form.component";
import { TableComponent } from "./components/table/table.component";
import { ReactiveFormsModule } from "@angular/forms";
import { NavComponent } from "./components/nav/nav.component";
import { LayoutModule } from "@angular/cdk/layout";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatButtonModule } from "@angular/material/button";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatIconModule } from "@angular/material/icon";
import { MatListModule } from "@angular/material/list";
import { ProductsListComponent } from "./components/products-list/products-list.component";

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
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
  ],
})
export class AdminModule {}
