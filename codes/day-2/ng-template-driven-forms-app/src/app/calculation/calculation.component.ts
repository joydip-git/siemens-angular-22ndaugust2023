import { Component } from "@angular/core";
import { FormGroup, NgForm } from "@angular/forms";

@Component({
    selector: 'app-calculation',
    templateUrl: './calculation.component.html',
    styleUrls: ['./calculation.component.css']
})
export class CalculationComponent {
    //first = '0'
    //second = '0'
    result = '0'
    calculate(frm: NgForm) {
        // this.result = (Number(this.first) + Number(this.second)).toString()
        //const formObject: FormGroup = frm.form
        //console.log(formObject.value['secondTextBox'])
        //console.log(formObject.controls['secondTextBox']?.value)
        console.log(frm)
        this.result = (Number(frm.value['firstTextBox']) + Number(frm.value['secondTextBox'])).toString()
    }
}