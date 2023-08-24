import { Component, OnInit } from '@angular/core';
import { StorageService } from '../../services/storage.service';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent implements OnInit {
  productInfo?: Product;
  errorMessage = ''

  constructor(private storageService: StorageService<Product>) { }

  ngOnInit(): void {
    this.storageService.storage.subscribe({
      next: (data) => {
        this.productInfo = data
        this.errorMessage = ''
      },
      error: (err) => {
        this.productInfo = undefined
        this.errorMessage = err.message
      }
    })
  }
}
