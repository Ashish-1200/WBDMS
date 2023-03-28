

import { Injectable } from "@angular/core";
import { HttpClient, HttpContext, HttpHeaders, HttpParams } from "@angular/common/http";
import { Subject } from "rxjs";

@Injectable({ providedIn: "root" })
export class CreateformeventService {   constructor(private http: HttpClient) {}

userId:any;
formData:any;

  createform(formData: any,userId:any) {
    console.log(formData);
    console.log(userId);
    return this.http.post<any>('http://localhost:3000/event/create',formData,userId)



  }




}

