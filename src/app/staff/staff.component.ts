import { Component, OnInit } from '@angular/core';
import { Staff } from '../staff/staff';
import { StaffService } from '../staff.service';

@Component({
  selector: 'app-staff',
  templateUrl: './staff.component.html',
  styleUrls: ['./staff.component.css']
})
export class StaffComponent implements OnInit {
  staffs: Staff = {
    id: 1,
    name: 'Ayo',
    role: 'Director'
  };

  selectedStaff: Staff;
  onSelect(staff: Staff): void {
  this.selectedStaff = staff;
}

getStaff(): void {
  this.staff = this.staffService.getStaff();
}

  staff : Staff[];

  constructor(private staffService: StaffService) { }

  ngOnInit() {
    this.getStaff()
  }

}

