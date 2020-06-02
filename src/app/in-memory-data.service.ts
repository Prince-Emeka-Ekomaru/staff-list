import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Staff } from './staff/staff';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const staff = [
      { id: 1, name: 'Ayo', role: 'Director' },
      { id: 2, name: 'Idris', role: 'Director2' },
      { id: 3, name: 'Jumoke', role:'HR Manager' },
      { id: 4, name: 'Seun', role:'Technical Head' },
      { id: 5, name: 'Kaka', role:'Project Manager' },
      { id: 6, name: 'Kazeem', role:'Team Lead' },
      { id: 7, name: 'Eddie',role: 'Design Wizard' },
      { id: 8, name: 'Ife', role:'IOS Master' },
      { id: 9, name: 'Lizzy', role:'Back-end Egnr' },
      { id: 10, name: 'Simbo',role:'Data DOCTOR ' },
      { id: 11, name: 'Dav', role:'PHP Lord' },
      { id: 12, name: 'Chux', role:'Network Batman' },
      { id: 13, name: 'Nero', role:'Java Lord' },
      { id: 14, name: 'Immanuel',role:'Remote JS Lord' },
      { id: 15, name: 'KK',role:'Content Team Manager' },
      { id: 16, name: 'Ramadan',role:'Back-end Intern' },
      { id: 17, name: 'Saidat',role:'Content team Lead' },
      { id: 18, name: 'Prince',role:'Front-end Intern' }

    ];
    return {staff};
  }

  // Overrides the genId method to ensure that a staff always has an id.
  // If the staff array is empty,
  // the method below returns the initial number (11).
  // if the staff array is not empty, the method below returns the highest
  // staff id + 1.
  genId(staff: Staff[]): number {
    return staff.length > 0 ? Math.max(...staff.map(staff => staff.id)) + 1 : 18;
  }
}
