import { Injectable } from "@angular/core";
import { HttpClient} from "@angular/common/http";
import {Router} from '@angular/router';
import { Observable } from "rxjs";

@Injectable({ providedIn:"root"})
export class  ViewformService {
  constructor(private http: HttpClient ){ }

  viewincidentForm(id:any)
 {

  const url = `http://localhost:3000/incidentreport/${id}`;
    return this.http.get(url);
 }}

