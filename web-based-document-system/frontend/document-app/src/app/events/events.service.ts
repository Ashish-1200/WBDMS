import { Injectable } from "@angular/core";
import { HttpClient} from "@angular/common/http";

import {eventm} from './events.model'


@Injectable({ providedIn:"root"})
export class  eventservice {
  private baseUrl = 'http://localhost:3000/event';

  constructor(private http: HttpClient ){ }

  getevent(){
    return this.http.get <eventm[]> (`${this.baseUrl}/list`);

  }

  deleteevent(id:any){
    return this.http.delete(`${this.baseUrl}/${id}`);
  }
  }
