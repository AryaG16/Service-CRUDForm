import { Component } from '@angular/core';
import { UserDataService } from '../services/user-data.service';

@Component({
  selector: 'app-edit-data',
  templateUrl: './edit-data.component.html',
  styleUrls: ['./edit-data.component.css'],
})
export class EditDataComponent {
  constructor(private userdata: UserDataService) {}

  edittedData(data: any) {
    this.userdata.editInList(data);
  }
}
