import { Component, OnDestroy, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Subscription } from 'rxjs';
import { Product } from 'src/app/models/product';
import { StorageService } from '../../services/storage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit, OnDestroy {

  private psSubscription?: Subscription;

  filterTextValue = ''
  loadingComplete = false
  errorMessage = ''
  products?: Product[];

  constructor(
    private ps: ProductService,
    private storageService: StorageService<Product>,
    private router: Router
  ) {

  }
  redirectToUpdateView(p: Product) {
    this.storageService.publish(p)
    this.router.navigate(['/products/update'])
  }
  receiveFilterText(text: string) {
    this.filterTextValue = text
    console.log(this.filterTextValue)
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
