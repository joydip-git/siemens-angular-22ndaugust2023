import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable()
export class StorageService<T> {
    private subjectStorage: BehaviorSubject<T | undefined>;
    private subjectObservable: Observable<T | undefined>;

    constructor() {
        this.subjectStorage = new BehaviorSubject<T | undefined>(undefined)
        this.subjectObservable = this.subjectStorage.asObservable()
    }

    public publish(data: T) {
        this.subjectStorage.next(data)
    }
    get storage() {
        return this.subjectObservable
    }
}