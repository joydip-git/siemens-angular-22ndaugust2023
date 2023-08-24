import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-filter-product',
  templateUrl: './filter-product.component.html',
  styleUrls: ['./filter-product.component.css']
})
export class FilterProductComponent {

  filterText = ''

  @Output() filterTextChanged = new EventEmitter<string>()

  passFilterText(data: string) {
    this.filterText = data
    this.filterTextChanged.emit(this.filterText)
  }
}
