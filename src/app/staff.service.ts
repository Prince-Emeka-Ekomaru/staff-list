import { Injectable } from '@angular/core';
import { Staff } from './staff/staff';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';
import { catchError, map, tap } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class StaffService {

  private staffUrl = 'api/staff'; //URL to web api

httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

  constructor(
    private http: HttpClient,
    private messageService: MessageService
    ) { }

  /** GET staff from the server */
  getStaff(): Observable<Staff[]> {
    return this.http.get<Staff[]>(this.staffUrl)
      .pipe(
        tap(_ => this.log('fetched staff')),
        catchError(this.handleError<Staff[]>('getStaff', []))
      );
  }

  /** GET staff by id. Return `undefined` when id not found */
  getStaffNo404<Data>(id: number): Observable<Staff> {
    const url = `${this.staffUrl}/?id=${id}`;
    return this.http.get<Staff[]>(url)
      .pipe(
        map(staff => staff[0]), // returns a {0|1} element array
        tap(h => {
          const outcome = h ? `fetched` : `did not find`;
          this.log(`${outcome} staff id=${id}`);
        }),
        catchError(this.handleError<Staff>(`getStaff id=${id}`))
      );
  }

  /** GET staff by id. Will 404 if id not found */
  getStaffList(id: number): Observable<Staff> {
    const url = `${this.staffUrl}/${id}`;
    return this.http.get<Staff>(url).pipe(
      tap(_ => this.log(`fetched staff id=${id}`)),
      catchError(this.handleError<Staff>(`getStaff id=${id}`))
    );
  }

  /* GET staff  whose name contains search term */
  searchStaff(term: string): Observable<Staff[]> {
    if (!term.trim()) {
      // if not search term, return empty staff array.
      return of([]);
    }
    return this.http.get<Staff[]>(`${this.staffUrl}/?name=${term}`).pipe(
      tap(x => x.length ?
         this.log(`found staff matching "${term}"`) :
         this.log(`no staff matching "${term}"`)),
      catchError(this.handleError<Staff[]>('searchStaff', []))
    );
  }

  //////// Save methods //////////

  /** POST: add a new staff to the server */
  addStaff(staff: Staff): Observable<Staff> {
    return this.http.post<Staff>(this.staffUrl,staff, this.httpOptions).pipe(
      tap((newStaff: Staff) => this.log(`added staff w/ id=${newStaff.id}`)),
      catchError(this.handleError<Staff>('addStaff'))
    );
  }

  /** DELETE: delete the staff from the server */
  deleteStaff(staff: Staff | number): Observable<Staff> {
    const id = typeof staff === 'number' ? staff : staff.id;
    const url = `${this.staffUrl}/${id}`;

    return this.http.delete<Staff>(url, this.httpOptions).pipe(
      tap(_ => this.log(`deleted staff id=${id}`)),
      catchError(this.handleError<Staff>('deleteStaff'))
    );
  }

  /** PUT: update the staff on the server */
  updateStaff(staff: Staff): Observable<any> {
    return this.http.put(this.staffUrl, staff, this.httpOptions).pipe(
      tap(_ => this.log(`updated staff id=${staff.id}`)),
      catchError(this.handleError<any>('updateStaff'))
    );
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  /** Log a StaffService message with the MessageService */
  private log(message: string) {
    this.messageService.add(`StaffService: ${message}`);
}

}



/* */
