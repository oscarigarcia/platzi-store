import { CartComponent } from "./components/cart/cart.component";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { ReactiveFormsModule } from "@angular/forms";

import { ExponentialPipe } from "./pipes/exponential/exponential.pipe";
import { GroupProductPipe } from "./pipes/groupProduct/group-product.pipe";
import { HighlightDirective } from "./directives/highlight/highlight.directive";
import { HeaderComponent } from "./components/header/header.component";
import { FooterComponent } from "./components/footer/footer.component";
import { MaterialModule } from "./../material/material.module";
import { MatBadgeModule } from "@angular/material/badge";

@NgModule({
  declarations: [
    ExponentialPipe,
    GroupProductPipe,
    HighlightDirective,
    HeaderComponent,
    FooterComponent,
    CartComponent,
  ],
  exports: [
    ExponentialPipe,
    GroupProductPipe,
    HighlightDirective,
    HeaderComponent,
    FooterComponent,
    MatBadgeModule,
    CartComponent,
    ReactiveFormsModule,
  ],
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule,
    MatBadgeModule,
    ReactiveFormsModule,
  ],
})
export class SharedModule {}
