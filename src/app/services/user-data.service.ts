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
  }

  toEditId: number = -1;
  saveToEditId(id: number) {
    this.toEditId = id;
  }

  // tempData: any = {};
  editInList(data: any) {
    for (let i = 0; i < this.list.length; i++) {
      if (this.list[i].id == this.toEditId) {
        this.list[i].name = data.name;
        this.list[i].email = data.email;
      }
    }
  }
}
