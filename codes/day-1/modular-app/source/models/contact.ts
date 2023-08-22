/*
class Contact {
    //private contactName: string;
    contactName: string;
    contactEmail: string;
    contactMobile: number;

    constructor(name: string, email: string, mobile: number) {
        this.contactEmail = email
        this.contactName = name
        this.contactMobile = mobile
    }
    // get ContactName(): string {
    //     return this.contactName
    // }
    // set ContactName(value: string) {
    //     this.contactName = value
    // }
}
*/
/*
class Contact {

    constructor(public contactName: string, public contactEmail: string, public contactMobile: number) {
    }
}
interface IContact {
    contactName: string;
    contactEmail: string;
    contactMobile: number;
    show(): string;
}

class Contact implements IContact {
    constructor(public contactName: string, public contactEmail: string, public contactMobile: number) {
    }
    show(): string {
        return `${this.contactName},${this.contactEmail}, ${this.contactMobile}`
    }
}
*/

export interface Contact {
    contactName: string;
    contactEmail: string;
    contactMobile: number;
}
