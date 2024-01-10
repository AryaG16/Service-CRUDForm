import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserDataService {
  constructor() {}

  list: any[] = [
    { id: 0, name: 'Aryan', email: 'aryan@gmail.com' },
    { id: 1, name: 'Ahashd', email: 'aryan@gmail.com' },
    { id: 2, name: 'abgbg', email: 'aryan@gmail.com' },
  ];

  id = this.list[this.list.length - 1].id;
  getId() {
    return ++this.id;
  }
  getList() {
    return this.list;
  }
  addToList(data: any) {
    this.list.push(data);
  }
  deleteInList(id: number) {
    this.list = this.list.filter((i) => i.id !== id);
    console.log('Logged from service', this.list);
  }

  toEditId: number = -1;
  saveToEditId(id: number) {
    this.toEditId = id;
  }

  tempData: any = {};
  editInList(data: any) {
    this.list[this.toEditId].name = data.name;
    this.list[this.toEditId].email = data.email;
    console.log('Logged from editserv', this.list);
  }
}
