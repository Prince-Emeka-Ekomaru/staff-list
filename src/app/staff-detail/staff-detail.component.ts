import { Component, OnInit, Input } from '@angular/core';
import { Staff } from '../staff/staff';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { StaffService }  from '../staff.service';

@Component({
  selector: 'app-staff-detail',
  templateUrl: './staff-detail.component.html',
  styleUrls: ['./staff-detail.component.css'],

})
export class StaffDetailComponent implements OnInit {
  staff: Staff;

  constructor(
    private route: ActivatedRoute,
    private staffService: StaffService,
    private location: Location) { }

    ngOnInit(): void {
        this.getStaff();
    }

  getStaff(): void {
  const id = +this.route.snapshot.paramMap.get('id');
  this.staffService.getStaffList(id)
  .subscribe(staff => this.staff = staff);
  }

  goBack(): void {
    this.location.back();
  }



}

/*

*/


