import { Component } from "@angular/core";
import { FormControl, FormGroup, FormBuilder, Validators } from "@angular/forms";
import { customValidator } from "../validators/customvalidators";

@Component({
    selector: 'app-calculation',
    templateUrl: './calculation.component.html',
    styleUrls: ['./calculation.component.css']
})
export class CalculationComponent {


    //first = new FormControl(0)
    //second = new FormControl(0)    
    // frm = new FormGroup({
    //     first: new FormControl(0),
    //     second: new FormControl(0)
    // })
    frm?: FormGroup;

    result = ''

    constructor(private builder: FormBuilder) {
        this.frm = this.builder.group({
            first: this.builder.control(0, [Validators.required, Validators.minLength(2), customValidator]),
            second: this.builder.control(0, [Validators.required, Validators.minLength(2), customValidator])
        })
    }

    calculate() {
        // this.result = (Number(this.first.value) + Number(this.second.value)).toString()
        this.result = (Number(this.first?.value) + Number(this.second?.value)).toString()
    }
    get first() {
        return this.frm?.get('first')
    }
    get second() {
        return this.frm?.controls['second']
    }
}