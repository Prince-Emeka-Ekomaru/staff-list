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
  @Input() staff: Staff;

  getStaff(): void {
  const id = +this.route.snapshot.paramMap.get('id');
  this.staffService.getStaff(id)
  .subscribe(staff => this.staff = staff);
  }
  constructor(
  private route: ActivatedRoute,
  private staffService: StaffService,
  private location: Location) { }

  ngOnInit(): void {
    this.getStaff();
  }


}




