import { Component } from '@angular/core';
import { UserDataService } from '../services/user-data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-data',
  templateUrl: './edit-data.component.html',
  styleUrls: ['./edit-data.component.css'],
})
export class EditDataComponent {
  constructor(private userdata: UserDataService, private router: Router) {}

  edittedData(data: any) {
    this.userdata.editInList(data);
    this.router.navigate(['viewC']);
  }
}
