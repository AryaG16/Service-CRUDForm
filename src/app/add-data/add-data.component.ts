import { Component } from '@angular/core';
import { UserDataService } from '../services/user-data.service';

@Component({
  selector: 'app-add-data',
  templateUrl: './add-data.component.html',
  styleUrls: ['./add-data.component.css'],
})
export class AddDataComponent {
  constructor(private userdata: UserDataService) {
    console.log('Logged from addData Cons', userdata.getList());
  }
  // private userdata: UserDataService;
  tempData: any = {};

  sendData(data: any) {
    this.tempData = data;
    this.tempData.id = this.userdata.getId();
    console.log('Logged from addDataC sendFunc', this.tempData);
    this.userdata.addToList(this.tempData);
  }
}
