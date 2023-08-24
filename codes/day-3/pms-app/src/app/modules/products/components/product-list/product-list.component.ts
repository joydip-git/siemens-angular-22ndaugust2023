import { Component, OnDestroy, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Subscription } from 'rxjs';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit, OnDestroy {

  private psSubscription?: Subscription;

  loadingComplete = false
  errorMessage = ''
  products?: Product[];

  constructor(private ps: ProductService) {

  }

  ngOnInit(): void {
    this.psSubscription =
      this.ps
        .getProducts()
        .subscribe({
          next: (response) => {
            if (response.data !== null) {
              this.products = response.data
              this.errorMessage = ''
              this.loadingComplete = true
            } else {
              this.products = undefined
              this.errorMessage = response.message
              this.loadingComplete = true
            }
          },
          error: (err: Error) => {
            this.products = undefined
            this.errorMessage = err.message
            this.loadingComplete = true
          }
        })
  }

  ngOnDestroy(): void {
    this.psSubscription?.unsubscribe()
  }

}
