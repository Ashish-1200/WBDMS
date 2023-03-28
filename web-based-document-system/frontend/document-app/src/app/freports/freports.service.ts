

  import { Injectable } from "@angular/core";
import { HttpClient} from "@angular/common/http";

import {financial} from './freports.model'


@Injectable({ providedIn:"root"})
export class  freportservice {


  constructor(private http: HttpClient ){ }

  listfinancialrep(){
    return this.http.get <financial[]> ("http://localhost:3000/financialreport/list")

  }

  deleteUserrep(id:any){
    return this.http.delete("http://localhost:3000/financialreport/" + id)
  }
}