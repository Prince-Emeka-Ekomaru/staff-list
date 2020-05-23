import { Component, OnInit } from '@angular/core';
import { Staff } from '../staff/staff';
import { STAFF } from '../staff/mock-staff';

@Component({
  selector: 'app-staff',
  templateUrl: './staff.component.html',
  styleUrls: ['./staff.component.css']
})
export class StaffComponent implements OnInit {
  staff: Staff = {
    id: 1,
    name: 'Ayo',
    role: 'Director'
  };

  selectedStaff: Staff;
  onSelect(staff: Staff): void {
  this.selectedStaff = staff;
}

  Staff = STAFF;
  constructor() { }

  ngOnInit() {
  }

}

