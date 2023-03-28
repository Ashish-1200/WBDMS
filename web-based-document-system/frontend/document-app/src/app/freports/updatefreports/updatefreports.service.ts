import { Injectable } from "@angular/core";
import { HttpClient} from "@angular/common/http";


@Injectable({ providedIn:"root"})
  export class UpdatefreportService {
  constructor(private http: HttpClient ){ }

  updateform(id:any,data:any){
    return this.http.put("http://localhost:3000/financialreport/" +id ,data)


  }





}