import { Observer, Subscription, filter, map } from "rxjs";
import { DataService } from "./dataservice";
import { setInterval } from "timers/promises";
//import { obsNum } from "./storage";

const observerObject: Observer<string[]> = {
    next: (data) => { console.log(data) },
    error: (err) => { console.log(err.message) },
    complete: () => { console.log('all done') }
}

const service = new DataService()
const sub: Subscription = service.storageObservable
    .pipe(
        map(
            (numberArray: number[]) => {
                return numberArray.map(
                    (n) => `Original:${n}, converted:${n * 5}`
                )
            }
        ),

    )
    .subscribe(observerObject)


async function publishNumbers(timedelay: number, ...num: number[]) {
    setTimeout(
        () => {
            service.publishData(...num)
        },
        timedelay
    )
}
console.log('start publishing')

console.log('1st set published')
publishNumbers(4000, 1, 2, 3)
console.log('2nd set published')
publishNumbers(2000, 10, 20, 30)
console.log('3rd set published')
publishNumbers(9000, 100, 200, 300)




