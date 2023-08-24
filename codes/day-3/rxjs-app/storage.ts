// import { Observable, of, BehaviorSubject } from "rxjs";
// const numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8]
// export const obsNum: Observable<number[]> = of(numbers)

import { Observable, of, onErrorResumeNext } from "rxjs";

function divide(a: number, b: number): Promise<Observable<number>> {
    const p: Promise<Observable<number>> = new Promise(
        //executor function
        (resolveFn, rejectFn) => {
            const res = a / b;
            if (res === Infinity) {
                rejectFn(new Error('divisor cn not be zero'))
            } else
                resolveFn(of(res))
        }
    )
    return p
}

const p: Promise<Observable<number>> = divide(12, 3)
p
    .then(
        (data) => {
            data.subscribe({
                next: (value) => {

                },
                error: (err) => {

                },
                complete: () => {

                }
            })
        },
        (err) => { console.log(err.message) }
    )