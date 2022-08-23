"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Phonebook {
    constructor() {
        this.contacts = [];
        this._index = 0;
        this.contactsSorted = [];
    }
    next() {
        if (this._index === this.contactsSorted.length) {
            return {
                done: true,
            };
        }
        return {
            done: false,
            value: this.contactsSorted[this._index++],
        };
    }
    [Symbol.iterator]() {
        this.contactsSorted = [...this.contacts].sort((a, b) => a.name < b.name ? -1 : 1);
        return this;
    }
    get size() {
        return this.contacts.length;
    }
    add(contact) {
        this.contacts.push(contact);
        return contact.id;
    }
    addPhone(id, phone) {
        for (const contact of this.contacts) {
            if (contact.id === id) {
                contact.phones.push(phone);
                return;
            }
        }
    }
    get(prop) {
        if (typeof prop === "number") {
            for (const contact of this.contacts) {
                if (contact.id == prop)
                    return contact;
            }
        }
        if (typeof prop === "string") {
            return this.contacts.filter((contact) => contact.name.includes(prop));
        }
    }
    remove(id) {
        const index = this.contacts.findIndex((contact) => contact.id == id);
        const removedcontact = this.contacts.splice(index, 1);
        return removedcontact[0];
    }
}
function createPhonebook() {
    return new Phonebook();
}
exports.default = createPhonebook;
