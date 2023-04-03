import { Injectable } from "@angular/core";
import { HttpClient} from "@angular/common/http";
import { Observable } from 'rxjs';


@Injectable({ providedIn:"root"})
export class  eventservice {

  private baseUrl = 'http://localhost:3000/event';


  constructor(private http: HttpClient) { }

  getevent(): Observable<any> {
    return this.http.get(`${this.baseUrl}/list`);
  }


  deleteevent(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }
}