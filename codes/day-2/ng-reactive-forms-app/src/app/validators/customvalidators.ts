import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export const customValidator: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
    if (control) {
        const value = control.value
        if (value && value !== '') {
            const numValue = Number(control.value)
            if (numValue > 0 && numValue < 10) {
                return null
            } else
                return {
                    range: {
                        requiredRange: '1-10',
                        actualValue: numValue
                    }
                }
        } else
            return null
    } else
        return null;
}