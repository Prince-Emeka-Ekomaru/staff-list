import { Injectable } from '@angular/core';
import { Staff } from './staff/staff';
import { StaffList } from './staff/mock-staff';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';



@Injectable({
  providedIn: 'root'
})
export class StaffService {

  constructor(private messageService: MessageService) { }

  getStaff(): Observable<Staff[]> {
// TODO: send the message _after_ fetching the staff
this.messageService.add('StaffService: fetched staff');
    return of(StaffList);
  }

getStaffList(id: number): Observable<Staff> {
this.messageService.add(`StaffService: fetched staff id=${id}`);
return of(StaffList.find(staff => staff.id === id));
}

}



/* */
