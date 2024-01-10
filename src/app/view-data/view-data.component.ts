import { Component } from '@angular/core';
import { UserDataService } from '../services/user-data.service';

@Component({
  selector: 'app-view-data',
  templateUrl: './view-data.component.html',
  styleUrls: ['./view-data.component.css'],
})
export class ViewDataComponent {
  users: any[] = [];
  constructor(private userdata: UserDataService) {
    this.users = userdata.getList();
  }

  deleteData(id: number) {
    this.userdata.deleteInList(id);
    this.users = this.userdata.getList();
  }
  editData(id: number) {
    this.userdata.saveToEditId(id);
  }
}
