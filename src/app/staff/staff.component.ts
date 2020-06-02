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

add(name: string): void {
  name = name.trim();
  if (!name) { return; }
  this.staffService.addStaff({ name } as Staff)
    .subscribe(staff => {
      this.staff.push(staff);
    });
}

delete(staff: Staff): void {
  this.staff = this.staff.filter(h => h !== staff);
  this.staffService.deleteStaff(staff).subscribe();
}


}

/*

} */
