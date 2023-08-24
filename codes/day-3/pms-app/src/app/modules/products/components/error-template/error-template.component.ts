import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-error-template',
  templateUrl: './error-template.component.html',
  styleUrls: ['./error-template.component.css']
})
export class ErrorTemplateComponent implements OnChanges {

  errorData = ''
  @Input() errorInfo = ''

  ngOnChanges(changes: SimpleChanges): void {
    this.errorData = this.errorInfo
  }

}
