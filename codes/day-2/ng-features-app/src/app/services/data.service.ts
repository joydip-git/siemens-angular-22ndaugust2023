import { Person } from "../models/person";
import { people } from "../repository/people";

export class DataService {
    getRecords() {
        return [...people]
    }
    getRecord(id: number) {
        return people.find(
            (p: Person) => p.id === id
        )
    }
}