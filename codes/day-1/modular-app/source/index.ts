//"use strict"
import { ContactManager } from "./manager/contactmanager";
import { Contact } from "./models/contact";
import { contacts } from "./repository/contacts";

const addButton = document.getElementById('btnAdd')
addButton?.addEventListener(
    'click',
    function () {
        const nameTextBox = <HTMLInputElement>document.getElementById('txtName')
        const emailTextBox = <HTMLInputElement>document.getElementById('txtEmail')
        const mobileTextBox = <HTMLInputElement>document.getElementById('txtMobile')

        const contact: Contact = {
            contactName: nameTextBox.value,
            contactEmail: emailTextBox.value,
            contactMobile: Number(mobileTextBox.value)
        }
        const manager = new ContactManager()
        const result = manager.add(contact)

        const spanElement = document.createElement('span')
        spanElement.innerText = result ? "Added" : "Not Added"

        document.body.appendChild(spanElement)


        console.log(manager.getAll())
    }
)

/*
const anilContact: Contact = {
    contactName: "anil",
    contactEmail: "anil@gmail.com",
    contactMobile: 9090909090
}



console.log(manager.getAll())
*/
