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

  getStaff(id: number): Observable<Staff> {

    // TODO: send the message _after_ fetching the staff
    this.messageService.add(`StaffService: fetched staff id=${id}`);
    return of(STAFF.find(staff => staff.id === id));
  }

}
/*getHero(id: number): Observable<Hero> {
  // TODO: send the message _after_ fetching the hero
  this.messageService.add(`HeroService: fetched hero id=${id}`);
  return of(HEROES.find(hero => hero.id === id));
} */
