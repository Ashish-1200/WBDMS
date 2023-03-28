import { Injectable } from "@angular/core";
import { HttpClient} from "@angular/common/http";
import {Router} from '@angular/router';
import { Observable } from "rxjs";

@Injectable({ providedIn:"root"})
export class  ViewfreportService {
  constructor(private http: HttpClient ){ }

  viewfreport(id:any)
 {
  return this.http.get("http://localhost:3000/financialreport/" +id)

  

}
  }