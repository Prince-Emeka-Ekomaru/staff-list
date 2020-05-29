import { Component, OnInit } from '@angular/core';
import { Staff } from '../staff/staff';
import { StaffService } from '../staff.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-staff',
  templateUrl: './staff.component.html',
  styleUrls: ['./staff.component.css']
})
export class StaffComponent implements OnInit {

  selectedStaff: Staff;

  onSelect(staff: Staff): void {
  this.selectedStaff = staff;
  this.messageService.add(`StaffService: Selected staff id=${staff.id}`);
}

getStaff(): void {
  this.staffService.getStaff()
  .subscribe(staff => this.staff = staff);
}

  staff : Staff[];

  constructor(private staffService: StaffService, private messageService: MessageService) { }

  ngOnInit() {
    this.getStaff()
  }

}
