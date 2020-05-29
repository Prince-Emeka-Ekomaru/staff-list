import { Component, OnInit } from '@angular/core';
import { Staff } from '../staff/staff';
import { StaffService } from '../staff.service';


@Component({
  selector: 'app-staff',
  templateUrl: './staff.component.html',
  styleUrls: ['./staff.component.css']
})
export class StaffComponent implements OnInit {
  constructor(private staffService: StaffService) { }

  selectedStaff: Staff;
  staff : Staff;

getStaff(): void {
  this.staffService.getStaff(1)
  .subscribe(staff => this.staff = staff);
}


getStaffList(): void {
  this.staffService.getStaffList()
  .subscribe(staffList => this.staff = staffList);
}



  ngOnInit() : void {
    this.getStaffList();
  }

}

