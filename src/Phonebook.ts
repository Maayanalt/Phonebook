import Contact from "./Contact";
import IPhonebook from "./IPhonebook";

class Phonebook implements IPhonebook {
  contacts: Contact[];
  constructor() {
    this.contacts = [];
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
