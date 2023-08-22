import { Contact } from "../models/contact";
import { Manager } from "../models/contactmanager.contract";
import { contacts } from "../repository/contacts";

export class ContactManager implements Manager<Contact> {
    add(data: Contact): boolean {
        const found = this.get(data.contactEmail)
        if (found)
            return false;
        else {
            contacts.push(data)
            return true
        }
    }
    get(email: string): Contact | undefined | null {
        const found = contacts.find(
            (c: Contact) => c.contactEmail === email
        )
        return found
    }
    getAll(): Contact[] {
        return [...contacts]
    }
}