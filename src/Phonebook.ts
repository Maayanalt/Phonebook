import Contact from "./Contact";
import IPhonebook from "./IPhonebook";

class Phonebook implements IPhonebook {
  contacts: Contact[];
  _index: number;
  contactsSorted: Contact[];

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
    this.contactsSorted = [...this.contacts].sort((a, b) =>
      a.name < b.name ? -1 : 1
    );
    return this;
  }

  get size() {
    return this.contacts.length;
  }

  add(contact: Contact): number {
    this.contacts.push(contact);
    return contact.id;
  }

  addPhone(id: number, phone: string): void {
    for (const contact of this.contacts) {
      if (contact.id === id) {
        contact.phones.push(phone);
        return;
      }
    }
  }

  get(id: number): Contact | undefined;
  get(name: string): Contact[] | undefined;
  get(prop: unknown): Contact | Contact[] | undefined {
    if (typeof prop === "number") {
      for (const contact of this.contacts) {
        if (contact.id == prop) return contact;
      }
    }
    if (typeof prop === "string") {
      return this.contacts.filter((contact) => contact.name.includes(prop));
    }
  }

  remove(id: number): Contact | undefined {
    const index = this.contacts.findIndex((contact) => contact.id == id);
    const removedcontact = this.contacts.splice(index, 1);
    return removedcontact[0];
  }
}

function createPhonebook(): IPhonebook {
  return new Phonebook();
}

export default createPhonebook;
