import { BehaviorSubject } from "rxjs";

export class DataService {
    private storage = new BehaviorSubject<number[]>([])
    storageObservable = this.storage.asObservable()

    publishData(...num: number[]) {
        this.storage.next(num)
    }
}