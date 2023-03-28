import { Injectable } from "@angular/core";
import { HttpClient} from "@angular/common/http";

import {eventm} from './event.model'


@Injectable({ providedIn:"root"})
export class  eventservice {


  constructor(private http: HttpClient ){ }

  listeventrep(){
    return this.http.get <eventm[]> ("http://localhost:3000/event/list")

  }

  deleteUserrep(id:any){
    return this.http.delete("http://localhost:3000/event/" + id)
  }
}