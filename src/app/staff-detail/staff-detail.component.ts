import { Component, OnInit, Input } from '@angular/core';
import { Staff } from '../staff/staff';

@Component({
  selector: 'app-staff-detail',
  templateUrl: './staff-detail.component.html',
  styleUrls: ['./staff-detail.component.css'],

})
export class StaffDetailComponent implements OnInit {
  @Input() staff: Staff;

  constructor() { }

  ngOnInit() {
  }


}


