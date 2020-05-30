import { Component, OnInit } from '@angular/core';
import { Staff } from '../staff/staff';
import { StaffService } from '../staff.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  staff: Staff[] = [];
  constructor(private staffService: StaffService) { }

  ngOnInit(): void {
    this.getStaff();
  }

  getStaff(): void {
    this.staffService.getStaff()
    .subscribe(staff => this.staff = staff.slice(1, 5));
  }

}
/*


}*/
