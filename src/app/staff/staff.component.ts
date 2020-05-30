import { Component, OnInit } from '@angular/core';
import { Staff } from '../staff/staff';
import { StaffService } from '../staff.service';


@Component({
  selector: 'app-staff',
  templateUrl: './staff.component.html',
  styleUrls: ['./staff.component.css']
})
export class StaffComponent implements OnInit {

  staff: Staff[];

  constructor(private staffService: StaffService) { }
  ngOnInit() {
      this.getStaff();
    }


getStaff(): void {
  this.staffService.getStaff()
  .subscribe(staff => this.staff = staff);
}

}

/*

} */
