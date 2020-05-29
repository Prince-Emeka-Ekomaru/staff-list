import { Injectable } from '@angular/core';
import { Staff } from './staff/staff';
import { STAFF } from './staff/mock-staff';
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
    return of (STAFF);
  }

}
/*getHeroes(): Observable<Hero[]> {

  this.messageService.add('HeroService: fetched heroes');
  return of(HEROES);
} */
