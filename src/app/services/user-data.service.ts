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
  id = 0;
  getId() {
    return this.id++;
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

  tempData: any = {};
  editInList(id: number, data: any) {
    this.tempData = data;
    // this.list = this.list.filter((item) => {
    //   if (item.id === id) {
    //     item.name = this.tempData.name;
    //     item.email = this.tempData.email;
    //   }
    //   console.log('DAta', this.list);
    // });
    this.list[id].name = data.name;
    this.list[id].email = data.email;
    console.log('Logged from editserv', this.list);
  }
}
