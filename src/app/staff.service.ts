import { Injectable } from '@angular/core';
import { Staff } from './staff/staff';
import { STAFF } from './staff/mock-staff';


@Injectable({
  providedIn: 'root'
})
export class StaffService {

  constructor() { }

  getStaff(): Staff[] {
    return STAFF;
  }

}
