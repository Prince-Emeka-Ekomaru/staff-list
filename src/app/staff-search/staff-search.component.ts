import { Component, OnInit } from '@angular/core';

import { Observable, Subject } from 'rxjs';

import {
   debounceTime, distinctUntilChanged, switchMap
 } from 'rxjs/operators';

import { StaffService } from '../staff.service';
import { Staff } from '../staff/staff';

@Component({
  selector: 'app-staff-search',
  templateUrl: './staff-search.component.html',
  styleUrls: [ './staff-search.component.css' ]
})
export class StaffSearchComponent implements OnInit {
  staff$: Observable<Staff[]>;
  private searchTerms = new Subject<string>();

  constructor(private staffService: StaffService) {}

  // Push a search term into the observable stream.
  search(term: string): void {
    this.searchTerms.next(term);
  }

  ngOnInit(): void {
    this.staff$ = this.searchTerms.pipe(
      // wait 300ms after each keystroke before considering the term
      debounceTime(300),

      // ignore new term if same as previous term
      distinctUntilChanged(),

      // switch to new search observable each time the term changes
      switchMap((term: string) => this.staffService.searchStaff(term)),
    );
  }
}
