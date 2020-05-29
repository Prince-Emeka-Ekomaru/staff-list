import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  staffService: any;
  staff: any;

  getStaff(): void {
    this.staffService.getStaff()
    .subscribe(staff => this.staff = staff.slice(1, 5));
  }
  constructor() { }

  ngOnInit(): void {
  }

}

