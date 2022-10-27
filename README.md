# Phonebook - Iterator Design Pattern Exercise
> This exercise follows the Iterator design pattern in TypeScript.

*You can access the elements of a set using the iterator behavioral design pattern without revealing the representation underneath (for example: stack, lists, tree, etc.)*
<br/>
<br/>
*whenever we have a number of objects and when users want a mechanism to loop through each collection piece in a specific order, we should utilize the iterator pattern to construct the solution.*
<br/>
## Phonebook exercise instructions:
- Create Contact.ts which is a container for phonebook contacts (id, name, address, phones)
- Create IPhonebook.ts for managing phonebook of contacts.
  <br/>
  size:number - gets the amount of contacts
  <br/>
  add(contact:Contact):number - add contact and returns its new id
  <br/>
  addPhone(id:number, phone:string):void - add new phone to existing contact
  <br/>
  get(id:number):Contact|undefined - get contact by id
  <br/>
  get(name:string):Contact[]|undefined - get contacts by name
  <br/>
  remove(id:number):Contact|undefined - remove contact by id and returns it
- Create Phonebook.ts implementing IPhonebook interface. But don't export Phonebook. Instead, export a function that returns an instance implementing IPhonebook: createPhonebook():IPhonebook
- in main.ts:
  <br/>
  import the function and get an instance of phonebook. (Notice, you'll be using the phonebook but only via the IPhonebook interface!)
  <br/>
  Add manually 11 contacts, few with same name (e.g. {'Shahar', 'Ben-Gurion 14, Netanya', ['09-43433']} ) *Keep the data as realistic as possible
- add 2 new contacts: 1 with existing name, 1 with new name check the size is updated
- add phone to existing contact
- get contacts by name and add to them the same phone (Notice that adding a phone is done ONLY via addPhone!)
- remove the last contact (of the previous contacts from #8) by id check the size is updated
- Enable this:
  ```
  for(const contact of Phonebook){
  //contacts will be delivered in alphabetical order
  }
  ```
