import { Component } from '@angular/core';
//import { NgModel } from '@angular/forms';
import { people } from './repository/people';
import { Person } from './models/person';
import { DataService } from './services/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  //providers: [DataService]
})
export class AppComponent {
  title = "Welcome to Angular Data Binding"
  widthValue = 300
  numbers: number[] = [1, 2, 3, 4, 5]
  //records: Person[] | undefined;
  records?: Person[];

  constructor(private ds: DataService) {
    // const service = new DataService()
    // this.records = service.getRecords()
    this.records = this.ds.getRecords()
  }

  // changeText(value: string) {
  //   this.title = value
  // }
  // view(model: any) {
  //   console.log(model)
  // }
}
