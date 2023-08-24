import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { AddProductComponent } from './components/add-product/add-product.component';
import { UpdateProductComponent } from './components/update-product/update-product.component';
import { FilterProductComponent } from './components/filter-product/filter-product.component';
import { ProductsRoutingModule } from './products-routing.module';
import { ProductService } from './services/product.service';
import { HttpClientModule } from '@angular/common/http';
import { ProductFilterPipe } from './pipes/product-filter.pipe';
import { ErrorTemplateComponent } from './components/error-template/error-template.component';



@NgModule({
  declarations: [
    ProductListComponent,
    ProductDetailComponent,
    AddProductComponent,
    UpdateProductComponent,
    FilterProductComponent,
    ProductFilterPipe,
    ErrorTemplateComponent
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    HttpClientModule
  ],
  providers: [ProductService]
})
export class ProductsModule { }
