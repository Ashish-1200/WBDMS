import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { AbstractControl } from "@angular/forms";
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SignupService {

  private baseUrl = 'http://localhost:3000/users';

  constructor(private http: HttpClient) { }

  addUserForm(userForm: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/register`, userForm).pipe(
      map(response => {
        return response;
      }),
      catchError(error => {
        console.log(error);
        return of(error);
      })
    );
  }

  checkUsernameAvailability(control: AbstractControl): Observable<any> {
    return this.http.get(`${this.baseUrl}/username_availability?username=${control.value}`).pipe(
      map((response: { [key: string]: any }) => {
        return response['available'] ? null : { usernameTaken: true };
      }),
      catchError(error => {
        console.log(error);
        return of(error);
      })
    );
  }

  checkEmailAvailability(control: AbstractControl): Observable<any> {
    return this.http.get(`${this.baseUrl}/email_availability?email=${control.value}`).pipe(
      map((response: { [key: string]: any }) => {
        return response['available'] ? null : { emailTaken: true };
      }),
      catchError(error => {
        console.log(error);
        return of(error);
      })
    );
  }

}