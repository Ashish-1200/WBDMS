import { Injectable } from "@angular/core";
import { HttpClient} from "@angular/common/http";

import {incident} from './incidentreport.model'


@Injectable({ providedIn:"root"})
export class  incidentreportservice {


  constructor(private http: HttpClient ){ }

  listIncidentsrep(){
    return this.http.get <incident[]> ("http://localhost:3000/incidentreport/list")

  }

  deleteUserrep(id:any){
    return this.http.delete("http://localhost:3000/incidentreport/" + id)
  }
}