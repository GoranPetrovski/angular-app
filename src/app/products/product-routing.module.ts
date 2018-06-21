import { NgModule } from "@angular/core";
import { ProductListComponent } from "./product-list.component";
import { ProductGuardService } from "./product-guard.service";
import { ProductDetailComponent } from "./product-detail.component";
import { RouterModule } from "@angular/router";

@NgModule({
    imports: [
        RouterModule.forChild([
            { path: 'products', component: ProductListComponent },
            { path: 'products/:id', 
              canActivate:[ProductGuardService],
              component: ProductDetailComponent },
          ]),
    ],
    exports: [ RouterModule ]
})
export class ProductRoutingModule {

}